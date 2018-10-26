import EventEmiter  from "./EventEmiter.js";
import SocialMixing from "./SocialMixing.js";

export default class Movie extends EventEmiter {
   
    constructor(tempTitle,tempYear,tempDuration){
        super();
        this.title = tempTitle;
        this.year = tempYear;
        this.duration = tempDuration;
        Object.assign(this, SocialMixing);
    }
    play(){
       this.emit("Play");
    }
    pause(){
        this.emit("Pause");
    }
    resume(){
        this.emit("Resume");
    }

    addCast(cast){
        if(!this.cast) {
            this.cast = [];
          }
      
          if(Array.isArray(cast)) {
            cast.forEach(actor => {
              this.cast.push(actor);
            });
          }
          else {
            this.cast.push(cast);
          }   
    }
}
