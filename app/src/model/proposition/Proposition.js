import { playBase64 } from "../utilities/Recorder"
import CorrectSound from "../../../res/correct.mp3"
import WrongSound from "../../../res/wrong.mp3"


/**
 * A Proposition is an idea, expressed in two sentences in two different languages.
 * The constructor takes the json generated by a PropositionBuilder.
 */
export default class Proposition {

    /**
     * Min accuracy for user translation to be considered successful.
     */
    static MIN_PASSING_SCORE = 51

    /**
     * Used as a placeholder to make sure nothing breaks when you run out of real ones.
     */
    static NULL = new Proposition({ sentence_one: "placeholder text: if u see it report a bug!", sentence_two: "testo che tiene il posto: se lo vedi segnala il baco!", audio_base64: "data:audio/wav;base64,UklGRjIAAABXQVZFZm10IBIAAAABAAEAQB8AAEAfAAABAAgAAABmYWN0BAAAAAAAAABkYXRhAAAAAA==", word_dict: { "ciao": "hello" }, reverse_dict: { "hello": "ciao" }, target_to_native: true })

    constructor(jsonData) {
        this.sentenceOne = jsonData.sentence_one
        this.sentenceTwo = jsonData.sentence_two
        this.audioBase64 = jsonData.audio_base64
        this.wordDict = jsonData.word_dict
        this.reverseDict = jsonData.reverse_dict
        this.targetToNative = jsonData.target_to_native ?? true

        this.answerHidden = true // is answer still hidden?
    }

    /**
     * Play the audio of the sentence if the user is allowed to hear it.
     */
    play = () => {

        if(  (!this.targetToNative) && this.answerHidden ){
            //user is barred from hearing when: they must still answer to a nativeToTarget question!
        }else{
            playBase64(this.audioBase64)
        }
        
    }

    /**
     * Give a rating from 0% to 100% to the user's translation.
     * @param {*} users_translation 
     * @returns 
     */
    check(users_translation) {

        let correctSentence = this.targetToNative ? this.sentenceTwo : this.sentenceOne

        let counter = 0;
        for (let userWord of users_translation.split(/\s+/)) {
            if (correctSentence.split(/\s+/).includes(userWord)) {
                counter++
            }
        }

        let result = parseInt(100 * counter / this.sentenceTwo.split(/\s+/).length)
        this.score = result

        //play sound if considered correct
        if (result > Proposition.MIN_PASSING_SCORE) {
            playBase64(CorrectSound)
        } else {
            playBase64(WrongSound)
        }

        return result
    }

    /**
    * Get the user's score as a percentage (integer from 0 to 100)
    * @returns number
    */
    getScore = () => {
        return this.score
    }

    /**
     * Returns a [word, definition] list with sentenceOne's words.
     * @returns {  [[string, string]]  }
     */
    sentenceOneEntries(){
        return this.sentenceOne.split(/\s+/).map(w=> [w, this.wordDict[w]  ]  )
    }

    /**
     * Returns a [word, definition] list with sentenceTwo's words.
     * @returns {  [[string, string]]  }
     */
    sentenceTwoEntries(){
        return this.sentenceTwo.split(/\s+/).map(w=> [w, this.reverseDict[w]  ]  )
    }

    /**
     * If targetToNative==true, return the data for the target language.
     * @returns {  [[string, string]]  }
     */
    getQuestionWordDict = () => {
        this.answerHidden  = true
        return this.targetToNative ? this.sentenceOneEntries() : this.sentenceTwoEntries()
    }

    /**
     * If targetToNative==true, return the data for the native language.
     * @returns {  [[string, string]]  }
     */
    getAnswerWordDict = () => {
        this.answerHidden = false
        return this.targetToNative ? this.sentenceTwoEntries() : this.sentenceOneEntries() 
    }

    /**
     * 
     * @returns {number}
     */
    getHash = ()=>{
        return (this.sentenceOne+this.sentenceTwo).split("").map((c)=>{return c.charCodeAt(0)}).reduce( (a, b)=>{return a + b} )
    }


}


