// import express from "express";
const express = require("express");
const app = express();
const port = 3000;

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
// SearchName, SearchYear, SearchGenre, SearchActors, SearchDirectors
// Title, Year, Genre, Actors, Director
// ================================================================================================
// TODO
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
// insertMovie: Endpoint permettant de créer un film
// ================================================================================================
// TODO

// ================================================================================================
// deleteMovie: Endpoint permettant de supprimer un film
// ================================================================================================
// TODO

// ================================================================================================
// updateMovie: Endpoint permettant de modifier un film
// ================================================================================================
// TODO

// ================================================================================================
// getMovieStats: Endpoint permettant d'obtenir des statistiques sur sa collection de films
/*    getTotalMoviesPerGenre      Nombre total et nombre par genre
      getTotalMoviesPerDirector   Réalisateur le plus et le moins populaire
      getTotalMoviesPerActor      Acteur le plus et le moins populaire
      getMostMoviesPerGenre       Genre le plus et le moins présent
*/
// ================================================================================================
// TODO
