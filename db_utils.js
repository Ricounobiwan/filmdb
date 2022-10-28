const mysql = require("mysql2");

function createConnection(user, password, database) {
  const dbConfig = {
    user: user,
    password: password,
    database: database,
  };

  const connection = mysql.createConnection(dbConfig);
  return connection;
}

// ================================================================================================
// DONE - SearchAll: lister tous les films
// ================================================================================================
function selectAllMovies(connection, functionToCallWhenDone) {
  connection.query("SELECT * FROM movies", functionToCallWhenDone);
}

// ================================================================================================
// DONE - SearchCriteria: Endpoint permettant de lister tous les films correspondant à un critère:
//    selectMoviesByTitle, selectMoviesByYear, selectMoviesByGenre, selectMoviesByActors,
//    selectMoviesByDirector
// Title, ReleaseYear, Genre, Actors, Director
// ================================================================================================
function selectMoviesByTitle(connection, title, functionToCallWhenDone) {
  connection.query(
    "SELECT * FROM movies WHERE Title = ?",
    [title],
    functionToCallWhenDone
  );
}

function selectMoviesByCriteria(
  connection,
  fieldToSearch,
  valueToSearch,
  functionToCallWhenDone
) {
  console.log("fieldToSearch, valueToSearch ", fieldToSearch, valueToSearch);

  connection.query(
    `SELECT * FROM movies WHERE ${fieldToSearch} = ?`,
    [valueToSearch],
    functionToCallWhenDone
  );
}

// ================================================================================================
// insertMovie: Endpoint permettant de créer un film
// ================================================================================================
function insertMovie(connection, movieData, functionToCallWhenDone) {
  const [
    id,
    rankIMDb,
    Title,
    Genre,
    ReleaseYear,
    Plot,
    ImageURL,
    VideoURL,
    Actor1,
    Actor2,
    Actor3,
    Director,
  ] = movieData;
  console.log(id, rankIMDb, Title, Genre, ReleaseYear);

  connection.query(
    "INSERT INTO movies (id, rankIMDb, Title, Genre, ReleaseYear, Plot, ImageURL, VideoURL, Actor1, Actor2, Actor3, Director) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      id,
      rankIMDb,
      Title,
      Genre,
      ReleaseYear,
      Plot,
      ImageURL,
      VideoURL,
      Actor1,
      Actor2,
      Actor3,
      Director,
    ],
    functionToCallWhenDone
  );

  return true;
}

// ================================================================================================
// deleteMovie: Endpoint permettant de supprimer un film
// ================================================================================================
function DeleteMovieById(connection, movieId, callback) {
  // Delete the records with address="Delhi"
  const sql = `DELETE FROM movies WHERE id = ${movieId}; `;

  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Record deleted = ", result.affectedRows);
    console.log(result);
    callback();
  });
}

// ================================================================================================
// updateMovie: Endpoint permettant de modifier un film
// ================================================================================================
function UpdateMovieById(
  connection,
  MovieIdToUpdate,
  MovieDataToUpdate,
  dataForUpdate,
  functionToCallWhenDone
) {
  connection.query(
    `UPDATE movies SET ${MovieDataToUpdate} = ? WHERE Id = ?;`,
    [dataForUpdate, MovieIdToUpdate],
    functionToCallWhenDone
  );
}

// ================================================================================================
// getMovieStats: Endpoint permettant d'obtenir des statistiques sur sa collection de films
/*    getTotalMoviesPerGenre      Nombre total et nombre par genre
      getTotalMoviesPerDirector   Réalisateur le plus et le moins populaire
      getTotalMoviesPerActor      Acteur le plus et le moins populaire
      getMostMoviesPerGenre       Genre le plus et le moins présent
*/
// ================================================================================================
// the number of customers in each country:
// SELECT COUNT(CustomerID), Country
// FROM Customers
// GROUP BY Country;

function getMovieStats(connection, functionToCallWhenDone) {
  // getTotalMoviesPerGenre      Nombre total et nombre par genre

  connection.query(
    `SELECT COUNT(*) as NbOfMovies, Genre FROM movies GROUP BY Genre;`,
    functionToCallWhenDone
  );

  connection.query(
    `SELECT COUNT(id) as NbOfMovies, Director FROM movies GROUP BY Director order by COUNT(id);`,
    functionToCallWhenDone
  );

  connection.query(
    `SELECT COUNT(id) as NbOfMovies, Actor1 FROM movies GROUP BY Actor1 order by COUNT(id);`,
    functionToCallWhenDone
  );

  // connection.query(`SELECT count(Genre) FROM movies;`, functionToCallWhenDone);

  // connection.query(
  //   `SELECT count(Genre) FROM movies;`,
  //   [dataForUpdate, MovieIdToUpdate],
  //   functionToCallWhenDone
  // );
}

/*
 * ====================================== TODO
 */
// function getUser(connection, userId, functionToCallWhenDone) {
//   // connection.query("SELECT * FROM user WHERE id="+userId, functionToCallWhenDone);
//   // NEVER DYNAMICALLY BUILD YOUR SQL QUERIES BY CONCATENATION
//   // RISK OF SQL INJECTION
//   connection.query(
//     "SELECT * FROM WHERE id = ?",
//     [userId],
//     functionToCallWhenDone
//   );
// }

// function insertUser(connection, userData, functionToCallWhenDone) {
//   // NEVER: let queryTxt = "INSERT INTO user (email) VALUES(" + value + ")";
//   connection.query(
//     "INSERT INTO user (email, city) VALUES(?, ?)",
//     [userData.email, userData.city], // an array of value
//     functionToCallWhenDone
//   );
// }

// // function buildUserUpdateQuery(fieldsToUpdate, values) {
// //   const fields = fieldsToUpdate.map((e) => `${e} = ?`);
// //   const query = `UPDATE user set ${fields} `;
// // }

// // compte le nombre d'utilisateurs dans la table user.
// // D'abord sans une fonction
// // Fonction: getUserCount, callback
// function getUserCount(connection, functionToCallWhenDone) {
//   connection.query(
//     "SELECT count(*) as nUser FROM user",
//     functionToCallWhenDone
//   );
// }

module.exports = {
  createConnection: createConnection,
  selectAllMovies: selectAllMovies,
  selectMoviesByTitle: selectMoviesByTitle,
  insertMovie: insertMovie,
  selectMoviesByCriteria: selectMoviesByCriteria,
  DeleteMovieById: DeleteMovieById,
  UpdateMovieById: UpdateMovieById,
  getMovieStats: getMovieStats,
};
