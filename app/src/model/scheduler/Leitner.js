import Proposition from "../Proposition";
import Scheduler from "./Scheduler";
import UserProgress from "./UserProgress";

/**
 * A Scheduler that remembers what Propositions the student 
 * performed poorly in, and proposes them first,  
 * the next time the same Lesson is taken.
 */
export default class Leitner extends Scheduler{

    constructor(lessonJson){
        super(lessonJson)
        this.initSequence()     
        this.counter = 0
        this.current = this.getPropositionByHash(this.sequence[0])
    }

    /**
     * Load back past scores and decide a repeptition strategy (sequence of Propositions)
     */
    initSequence(){

        try{

            let boxes = [[],[]]
            let propoScores = UserProgress.lessonScores()[this.lessonId].propositions

            propoScores.forEach((p)=>{
                if (p[1] <= Proposition.MIN_PASSING_SCORE){
                    boxes[0].push(p[0]) //high priority
                }else{
                    boxes[1].push(p[0]) //low priority
                }
            })

            this.sequence = boxes[0].concat(boxes[1])

        }catch{
            this.sequence =  this.propositions.map((p)=>{return p.getHash()})
        }
    }


    /**
     * Get a Proposition by its hash.
     * @param {number} propoHash 
     * @returns {Proposition}
     */
    getPropositionByHash(propoHash){
        return this.propositions.filter((p)=>{ return p.getHash()==propoHash })[0]
    }

    isOver(){
        this.isLessonOver? UserProgress.saveLessonScore(this.lessonId, this.dumpScores()) : ""
        return super.isOver()
    }

    next(){

        this.counter++
        this.current = this.getPropositionByHash(this.sequence[this.counter]) 
        if (!this.current){
            this.current = Proposition.NULL
            this.isLessonOver = true
        }
       
    }



}