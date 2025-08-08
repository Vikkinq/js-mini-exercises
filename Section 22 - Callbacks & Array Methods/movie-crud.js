const movieTracker = {
  movieList: [],
  addMovie(title, genre, rating) {
    const listOfMovies = {
      title,
      genre,
      rating,
    };

    this.movieList.push(listOfMovies);
    console.log("Movies Added");
  },
  viewAllMovies: () => {
    console.table(movieTracker.movieList);
  },
  viewTopRated() {
    const highRates = this.movieList
      .filter((movie) => movie.rating >= 80)
      .map((movie) => `${movie.title} - Rating: ${movie.rating}`);

    console.log(highRates);
  },
  removeMovie(title) {
    const indexMovie = this.movieList.findIndex(
      (movie) => movie.title === title
    );
    this.movieList.splice(indexMovie, 1);
    console.log(`${title} is Removed`);
  },
  updateMovie(title, newRating) {
    const indexMovie = this.movieList.findIndex(
      (movie) => movie.title === title
    );

    if (indexMovie === -1) {
      console.log("Movie Not Found!");
    } else {
      this.movieList[indexMovie].rating = newRating;
      console.log(`${title}'s rating updated to ${newRating}`);
    }
  },
};
