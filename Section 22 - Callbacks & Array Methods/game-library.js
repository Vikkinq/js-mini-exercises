const gameLibrary = {
  libraryOfGames: [],
  addGame(title, genre, hoursPlayed) {
    const gameList = {
      title,
      genre,
      hoursPlayed,
    };
    this.libraryOfGames.push(gameList);
    console.log(`${title} has been Added to the Library`);
  },
  viewGames() {
    console.table(this.libraryOfGames);
  },
  removeGames(title) {
    const viewIndex = this.libraryOfGames.findIndex(
      (gameTitle) => gameTitle.title === title
    );

    this.libraryOfGames.splice(viewIndex, 1);
    console.log(`${title} has been Removed from the Library`);
  },
  updateHours(title, newHours) {
    const movieIndex = this.libraryOfGames.findIndex(
      (gameTitle) => gameTitle.title === title
    );

    if (movieIndex === -1) {
      console.log("Game not found");
    } else {
      this.libraryOfGames[movieIndex].hoursPlayed = newHours;
      console.log(`${title} -> ${newHours}`);
    }
  },
  viewMostPlayed() {
    const mostHours = this.libraryOfGames.reduce((max, current) => {
      return current.hoursPlayed > max.hoursPlayed ? current : max;
    });

    console.log(
      `Most played Game: ${mostHours.title} | ${mostHours.hoursPlayed} Hours`
    );
  },
  clearLibrary() {
    this.libraryOfGames.splice(0, this.libraryOfGames.length);
  },
};
