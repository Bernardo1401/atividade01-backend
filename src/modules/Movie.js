const { v4: uuid4 } = require("uuid");

class Movie {
    constructor(title, gender, duration, director) {
        this.id = uuid4();
        this.title = title;
        this.gender = gender;
        this.duration = duration;
        this.director = director;
    }
}
module.exports = Song;