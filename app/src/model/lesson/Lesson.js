import PropositionSchedulerFactory from "../schedulers/proposition_scheduler/PropositionSchedulerFactory.js"
import Proposition from "../proposition/Proposition.js"
import UserProgress from "../utilities/UserProgress.js"
import Database from "../utilities/Database.js"

/**
 * A lesson contains a list of Propositions.
 * The constructor takes the json generated by `LessonBuilder`.
 */
export default class Lesson {

    constructor(jsonData) {
        this.jsonData = jsonData
        this.metadata = jsonData.metadata
        this.explanationText = jsonData.explanation.text
        this.propositions = jsonData.propositions.map(p => { return new Proposition(p) })
        this.oldScores = UserProgress.scoresForLesson(this.getId()) //may be nullish, if lesson with this id never taken
        this.scheduler = PropositionSchedulerFactory.getScheduler(this.oldScores, this.propositions)
        // UserProgress.saveLessonScore(this.getId(), this.dumpScores()) 
        // this.cacheLesson() 
    }

    /**
     * Point to the next proposition.
     */
    next() {
        this.scheduler.next()
    }

    /**
     * Get the current Proposition.
     * @returns {Proposition}
     */
    getCurrent() {
        return this.scheduler.getCurrent()
    }

    /**
     * Is this lesson over yet?
     * @returns {boolean}
     */
    isOver() {
        let over = this.scheduler.isOver()

        //if this lesson is over, save the score
        if(over){
            UserProgress.saveLessonScore(this.getId(), this.dumpScores()) 
            this.cacheLesson()
        }

        return over
    }

    /**
     * Get Lesson's overall score.
     * @returns {number}
     */
    getScore() {
        return parseInt(this.propositions.map((p) => { return p.getScore() }).reduce((a, b) => { return a + b }) / this.propositions.length)
    }

    /**
     * Nominally identifies a Lesson.
     * @returns {string}
     */
    getId() {
        return `author=${this.metadata.author};target_language=${this.metadata.target_language};source_language=${this.metadata.source_language};title=${this.metadata.title};`
    }

    /**
     * Parses a Lesson id
     * @param {string} lessonId 
     * @returns {{"author":string, "target_language" : string, "source_language": string, "title": string}}
     */
    static parseId(lessonId){
        return Object.fromEntries(lessonId.split(";").filter(x=>!!x).map(x=>x.split("=")))   
    }

    /**
    * Dumps info relative to the user's performance with this Lesson.
    *
    * @returns {{
    * "last_taken" : number,
    * "overall" :  number,
    * "propositions" : [ [string, number] ]
    *  }}
    */
    dumpScores() {

        return {
            "last_taken": new Date().getTime(),
            "overall": this.getScore(),
            "propositions": this.propositions.map((p) => { return [p.getHash(), p.getScore()] })
        }

    }

    /**
     * Cache this Lesson, overwriting it in case of conflicting ids.
     */
    async cacheLesson() {

        await Database.get().cachedLessons().delete(this.getId())
     
        Database.get().cachedLessons().add({
            id: this.getId(),
            lesson: this.jsonData
        })

    }

    /**
     * Load a previously cached Lesson on the DB back into memory. 
     * @param {string} id 
     * @returns {Promise<Lesson>}
     */
    static async getCachedLessonById(id){
        let record = await Database.get().cachedLessons().get(id)
        return new Lesson(record.lesson)
    }

    static getLessonIdsHistory(){
        return UserProgress.lessonsScores().map(l=>l.id)
    }

    
}

