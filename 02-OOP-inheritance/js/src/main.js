import Movie  from './Movie.js';
import Actor  from './Actor.js';
import Logger  from './Logger.js';



    var name = "Terminator";
    var year = "1991";
    var duration = "90";

     let example = new Movie(name,year,duration);

    const actors = [
        new Actor('Paul Winfield', 50),
        new Actor('Michael Biehn', 50),
        new Actor('Linda Hamilton', 50)
    ]

    var logge = new Logger;

    example.addCast(actors);


    
    example.on("play",logge.log("play"));
    example.play();

    example.share("Juan");
    example.like("Pedro");
