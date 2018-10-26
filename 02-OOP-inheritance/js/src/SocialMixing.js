var socialMixing = {
    share(friendName) {
        console.log(friendName + " share " + this.title);
    },
    like(friendName){
        console.log( friendName + ' like ' + this.title);
    }
}

export default socialMixing;