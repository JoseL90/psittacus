import React, { Component } from "react";
import L from "../../model/Language.js";
import S from "../../model/Settings.js"

export default class Settings extends Component {

    constructor(props) {
        super(props)

        this.state = {
            currentLang : L.current()
        }
    }

    onChooseLang  = (event)=>{
        let choice = event.target
        choice = choice.options[choice.selectedIndex].text    
        L.set(choice)
        this.setState({currentLang : L.current()})   
        window.location.reload() //danger, may loose work
    }

    render() {

        return (<div>

            <h1>{L.choose_lang}</h1>
            <select value={this.state.currentLang}  onChange={this.onChooseLang} >
                {L.available().map((opt)=>{return <option title={opt}>{opt}</option>  })}
            </select>

        </div>)
    }

}
