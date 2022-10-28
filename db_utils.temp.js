const dbutils = require("./db_utils");
const connection = dbutils.createConnection("root", "root", "cinemaDB");

function testSelectAllMovies() {
  dbutils.selectAllMovies(connection, (err, data) => {
    console.log(err);
    if (data.length === 0) {
      console.log("There should be some data but didn't find any...");
    }

    console.log(data);
    // connection.end();
  });
}
// testSelectAllMovies();

function testSelectMoviesByCriteria(fieldToSearch, valueToSearch) {
  dbutils.selectMoviesByCriteria(
    connection,
    fieldToSearch,
    valueToSearch,
    (err, data) => {
      console.log(err);
      if (data.length === 0) {
        console.log("There should be some data but didn't find any...");
      }

      console.log(data);
      return data;
      // connection.end();
    }
  );
}
// testSelectMoviesByCriteria("id", "1");

function testInsertMovie() {
  const movieData = [
    "6",
    "2300",
    "Your Name",
    "Comedy",
    "2016",
    "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
    "https://www.kino.dk/sites/default/files/movie-posters/yournameplakat_0.jpg",
    "VideoURL",
    "Ryûnosuke Kamiki",
    "Mone Kamishiraishi",
    "Ryô Narita",
    "Makoto Shinkai",
  ];

  dbutils.insertMovie(connection, movieData, (err, data) => {
    console.log(err);
    if (data.length === 0) {
      console.log("There should be some data but didn't find any...");
    }

    console.log(data);
    return data;
    // connection.end();
  });
}
// testInsertMovie();

function testDeleteMovieById(movieId) {
  dbutils.DeleteMovieById(connection, movieId, (err) => {
    if (err) console.log(err);
    return true;
  });
}
// testDeleteMovieById(100);

function testUpdateMovieById(
  MovieIdToUpdate,
  MovieDataToUpdate,
  dataForUpdate
) {
  const connection = dbutils.createConnection("root", "root", "cinemaDB");
  dbutils.UpdateMovieById(
    connection,
    MovieIdToUpdate,
    MovieDataToUpdate,
    dataForUpdate,
    (err, data) => {
      if (err) console.log("ERROR: ", err);
      if (data.length === 0) console.log("No Data Available");

      console.log(data);
      connection.end();
    }
  );
}
// testUpdateMovieById("99", "Title", "Dummy Title Modified");

// ======================================
// ======================================
function testGetMovieStats() {
  dbutils.getMovieStats(connection, (err, data) => {
    console.log(err);
    if (data.length === 0) {
      console.log("There should be some data but didn't find any...");
    }

    console.log(data);
    // connection.end();
  });
}
testGetMovieStats();

module.exports = {
  testSelectAllMovies: testSelectAllMovies,
  testSelectMoviesByCriteria: testSelectMoviesByCriteria,
  testInsertMovie: testInsertMovie,
  testDeleteMovieById: testDeleteMovieById,
  testUpdateMovieById: testUpdateMovieById,
  testGetMovieStats: testGetMovieStats,
};
