export default class EventEmitter{
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
