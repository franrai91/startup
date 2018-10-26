class movie{
    constructor(tempTitle,tempYear,tempDuration){
        this.title = tempTitle;
        this.year = tempYear;
        this.duration = tempDuration;
    }
    play(){
        console.log("Playing the movie");
    }
    pause(){
        console.log("Pause the movie");
    }
    resume(){
        console.log("Resume the movie");
    }
}
class actor{
    constructor(tempName,tempAge){
        this.name = tempName;
        this.age = tempAge;
    }
}
class eventEmitter{
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

//function of testing the data and methods of class movie

function createMovie(){
    var name = document.getElementById("nameMovie").value;
    var year = document.getElementById("yearMovie").value;
    var duration = document.getElementById("durationMovie").value;

    newest = new movie(name,year,duration);

    console.log(newest.title);
    console.log(newest.year);
    console.log(newest.duration);

    newest.play();
    newest.pause();
    newest.resume();
}