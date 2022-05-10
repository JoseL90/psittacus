import React, { Component } from "react";
import HoverableSentence from "./HoverableSentence.jsx";
import "../../index.css"
import L from "../../model/utilities/Language.js"
import Modes from "./Modes.js";
import Styles from "../Styles.js";
import PlayAudioIcon from "../../../res/play-audio.png"


export default class TakeLesson extends Component {

    constructor(props) {
        super(props)

        this.lesson = props.lesson
        this.userInput = React.createRef()

        this.state = {
            proposition: this.lesson.getCurrent(),
            userAccuracy: 0,
            solutionHidden: true,
            overallUserAccuracy: 0,
            mode: Modes.STANDARD
        }

        this.lesson.getCurrent().play()

    }


    next = () => {

        if (this.state.solutionHidden) {
            this.setState({ userAccuracy: this.state.proposition.check(this.userInput.current.value) })
            this.lesson.getCurrent().play()
        } else {
            this.lesson.next()
            this.setState({ proposition: this.lesson.getCurrent() })
            this.userInput.current.value = ""
            this.lesson.getCurrent().play()
        }

        this.setState({ solutionHidden: !this.state.solutionHidden })
        this.setState({ mode: this.lesson.isOver() ? Modes.LESSON_OVER : this.state.mode })
        this.setState({ overallUserAccuracy: this.lesson.getScore() })

    }



    render() {

        return (<div>

            <div style={this.state.mode == Modes.STANDARD ? Styles.visible : Styles.invisible}>
                <h1>{L.translate_this_sentence}</h1>
                <div className="text_tip">{L.need_a_tip_hover_words}</div>
                <br />

                <div style={{ width: "50vw" }}>

                    <HoverableSentence wordDict={this.state.proposition.getQuestionWordDict()} />
                    <button style={Styles.visibleInline} onClick={this.state.proposition.play} className="play_audio_button" style={(this.state.proposition.targetToNative && (this.state.mode != Modes.LESSON_OVER)) ? Styles.visibleInline : Styles.invisible} title={`${L.play_audio} (${L.shortcut_play_audio})`}>   <img src={PlayAudioIcon} />  </button>

                </div>


                <br />
                <input ref={this.userInput} type="text" className="normal_textbox" />
                <br />
                <button onClick={this.next} className="normal_button">{this.state.solutionHidden ? L.see_solution : L.next}  </button>
                <br />
                <div style={this.state.solutionHidden ? Styles.invisible : Styles.visible}>
                    <h1>{L.solution}:</h1>
                    <div className="text_tip">{L.need_a_tip_hover_words}</div>
                    <HoverableSentence wordDict={this.state.proposition.getAnswerWordDict()} />
                    <h2>{L.your_accuracy}: {this.state.userAccuracy}%</h2>
                </div>
                <br />
                <span className="text_tip">{L.need_a_lot_of_tips} <button  className="normal_link" onClick={() => { this.setState({ mode: Modes.EXPLANATION }) }}>{L.read_explanation}</button></span>
            </div>


            <div style={this.state.mode == Modes.LESSON_OVER ? Styles.visible : Styles.invisible}   >
                <h1>{L.thank_you_for_taking_lesson}</h1>
                <h2>{L.overall_accuracy} {this.state.overallUserAccuracy}%</h2>
            </div>


            <div style={this.state.mode == Modes.EXPLANATION ? Styles.visible : Styles.invisible}   >
                <button onClick={() => { this.setState({ mode: Modes.STANDARD }) }} className="normal_button">{L.back}</button>
                {/* Doesn't seem to execute javascript in Chromium and Firefox, but someone said it could... (could lead to xss problems) */}
                <div dangerouslySetInnerHTML={{ __html: this.lesson.explanationText }}></div>
            </div>

        </div>)
    }

    componentDidMount() {

        window.addEventListener("keydown", this.keyListener =  (e) => {

            //play recording if user allowed to hear it
            if (e.code == "Space" && e.shiftKey) {
                e.preventDefault();
                this.lesson.getCurrent().play()
            }

        })
    }

    componentWillUnmount(){
        window.removeEventListener( "keydown", this.keyListener)
    }




}