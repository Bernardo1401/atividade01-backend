class MovieList {
    constructor() {
        this.movies = [];
    }
    addMovie(movie) {
        this.movies.push(movie);
    }
    getAllMovies() {
        return this.movies;
    }

    getMovieById(id) {
        const movie = this.movies.find((movie) => movie.id == id);
        if (!movie) {
            throw new Error("Música não encontrada");
        }
        return movie;
    }

    updateMovie(id, updateData) {
        const movie = getmovieById(id);
        Object.assign(movie, updateData);
        return movie;
    }

    deleteMovie(id) {
        this.movies = this.movies.filter((movie) => movie.id != id);
    }

    getTotalMovies() {
        return this.movies.length;
    }

    getTop10Movies() {
        return this.movies.sort((a, b) => b.plays - a.plays).slice(0, 10);
    }
}

module.exports = MovieList;