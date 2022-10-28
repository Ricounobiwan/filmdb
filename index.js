const express = require("express");
const port = 3000;
const bodyParser = require("body-parser");
// const url = require("url");
// const querystring = require("querystring");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

const dbutils = require("./db_utils");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const jsonMiddleware = express.json();
app.use(express.static("public"));
app.use(jsonMiddleware);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

/*
 * API REST JSON :
 */
// ================================================================================================
// SearchAll: Endpoint permettant de lister tous les films
// ================================================================================================
app.get("/api/movies", (req, res) => {
  const connection = dbutils.createConnection("root", "root", "cinemaDB");
  dbutils.selectAllMovies(connection, (err, moviesData) => {
    if (err) {
      console.log(err);
    }

    if (moviesData.length === 0) {
      console.log("There should be some moviesData but didn't find any...");
    }

    console.log(moviesData);
    connection.end();

    res.send(moviesData);
  });
});

// ================================================================================================
// SearchCriteria: Endpoint permettant de lister tous les films correspondant à un critère:
//    selectMoviesByTitle,
//    TODO selectMoviesByYear, TODO selectMoviesByGenre, TODO selectMoviesByActors,
//    TODO selectMoviesByDirector
// Title, Year, Genre, Actors, Director
// ================================================================================================
app.get("/api/search", (req, res) => {
  const connection = dbutils.createConnection("root", "root", "cinemaDB");

  // Access the provided 'fieldToSearch' and 'valueToSearch' query parameters
  console.log("req.query ", req.query);
  console.log();

  const fieldToSearch = Object.keys(req.query);
  const valueToSearch = Object.values(req.query);

  console.log("fieldToSearch ", fieldToSearch);
  console.log("valueToSearch ", valueToSearch);

  dbutils.selectMoviesByCriteria(
    connection,
    fieldToSearch,
    valueToSearch,
    (err, moviesData) => {
      if (err) {
        console.log(err);
      }

      // if (moviesData.length === 0) {
      //   console.log("There should be some moviesData but didn't find any...");
      // }

      console.log(moviesData);
      connection.end();

      res.send(moviesData);
    }
  );
});

// ================================================================================================
app.get("/api/movies/:movieTitle", (req, res) => {
  const connection = dbutils.createConnection("root", "root", "cinemaDB");
  const movieTitle = req.params.movieTitle;

  dbutils.selectMoviesByTitle(connection, movieTitle, (err, moviesData) => {
    if (err) {
      console.log(err);
    }

    if (moviesData.length === 0) {
      console.log("There should be some moviesData but didn't find any...");
    }

    console.log(moviesData);
    connection.end();

    res.send(moviesData);
  });
});

// ================================================================================================
// insertMovie with query data: Endpoint permettant de créer un film
// ================================================================================================

app.get("/new", (req, res) => {
  const connection = dbutils.createConnection("root", "root", "cinemaDB");

  const parameters = req.query;
  console.log(
    "===================================/n PARAMETERS: ",
    parameters,
    typeof parameters
  );

  const movieData = Object.values(parameters);
  console.log("===================================/n movieData:", movieData);

  // const fieldToSearch = Object.keys(req.query);
  // const valueToSearch = Object.values(req.query);

  // http://localhost:3000/new?id=8&rankIMDb=2000&Title=Bonjour&Genre=Comedy&ReleaseYear=2016&Plot=DummyPlot&ImageURL=""&VideoURL=""&Actor1="Dummy"&Actor2="Dummy"&Actor3="Dummy3"&Director=Steven Spielberg

  // const movieData = [
  //   "15",
  //   "2300",
  //   "DUMMY Your Name",
  //   "Comedy",
  //   "2016",
  //   "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
  //   "https://www.kino.dk/sites/default/files/movie-posters/yournameplakat_0.jpg",
  //   "VideoURL",
  //   "Ryûnosuke Kamiki",
  //   "Mone Kamishiraishi",
  //   "Ryô Narita",
  //   "Makoto Shinkai",
  // ];

  // TODO const movieData = req.body;

  dbutils.insertMovie(connection, movieData, (err, data) => {
    if (err) {
      console.log("Error: ", err);
    }

    if (data) {
      if (data.length === 0) {
        console.log("There should be some moviesData but didn't find any...");
      }
    }
    connection.end();
    res.send(data);
  });
});

// ================================================================================================
// insertMovie: Endpoint permettant de créer un film
// ================================================================================================
// cf /Requests
app.get("/api/movies/new", (req, res) => {
  const connection = dbutils.createConnection("root", "root", "cinemaDB");

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

  // TODO const movieData = req.body;
  console.log(movieData);

  dbutils.insertMovie(connection, movieData, (err, data) => {
    if (err) {
      console.log("Error: ", err);
    }

    if (data.length === 0) {
      console.log("There should be some moviesData but didn't find any...");
    }
    connection.end();
    res.send(data);
  });
});

// ================================================================================================
// deleteMovie: Endpoint permettant de supprimer un film
// ================================================================================================
// cf /Requests

// ================================================================================================
// updateMovie: Endpoint permettant de modifier un film
// ================================================================================================
// cf /Requests

// ================================================================================================
// getMovieStats: Endpoint permettant d'obtenir des statistiques sur sa collection de films
/*    getTotalMoviesPerGenre      Nombre total et nombre par genre
      getTotalMoviesPerDirector   Réalisateur le plus et le moins populaire
      getTotalMoviesPerActor      Acteur le plus et le moins populaire
      getMostMoviesPerGenre       Genre le plus et le moins présent
*/
// ================================================================================================
// cf /Requests
