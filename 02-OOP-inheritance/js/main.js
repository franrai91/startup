class movie extends eventEmitter {
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