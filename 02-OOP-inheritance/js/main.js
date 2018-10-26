class EventEmitter{
    constructor(){
        this.event = {}
    }
    on(eventName,callback){
        if(!this.event[eventName]){
            this.event[eventName] = [];
        }
        
        this.event[eventName].push(callback);

    }
    emit(eventName){
        const emmet = this.event[eventName];

        if(emmet){
            emmet.forEach(funct => {
                funct.call(this);
            })
        }
    }

    off(eventName,callback){
        if(this.event[eventName]){
            this.event[eventName].delete(callback);
        }
    }
}
class Movie extends EventEmitter {
   
    constructor(tempTitle,tempYear,tempDuration){
        super();
        this.title = tempTitle;
        this.year = tempYear;
        this.duration = tempDuration;
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
class actor{
    constructor(tempName,tempAge){
        this.name = tempName;
        this.age = tempAge;
    }
}

class logger{
    constructor(){

    }

    log(info){
        console.log("the " + info + " has been emitted");
    }
}

//function of testing the data and methods of class movie

function createMovie(){
    var name = document.getElementById("nameMovie").value;
    var year = document.getElementById("yearMovie").value;
    var duration = document.getElementById("durationMovie").value;

    newest = new Movie(name,year,duration);

    const actors = [
        new actor('Paul Winfield', 50),
        new actor('Michael Biehn', 50),
        new actor('Linda Hamilton', 50)
    ]

    var logge = new logger;

    newest.addCast(actors);


    
    newest.on("play",logge.log("play"));
    newest.play();
}