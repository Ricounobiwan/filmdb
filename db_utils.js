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
// SearchAll: lister tous les films
// ================================================================================================
function selectAllMovies(connection, functionToCallWhenDone) {
  connection.query("SELECT * FROM movies", functionToCallWhenDone);
}

// ================================================================================================
// SearchCriteria: Endpoint permettant de lister tous les films correspondant à un critère:
//    selectMoviesByTitle, selectMoviesByYear, selectMoviesByGenre, selectMoviesByActors,
//    selectMoviesByDirector
// Title, Year, Genre, Actors, Director
// ================================================================================================
function selectMoviesByTitle(connection, title, functionToCallWhenDone) {
  connection.query(
    "SELECT * FROM movies WHERE Title = ?",
    [title],
    functionToCallWhenDone
  );
}

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

// function updateUserCity(
//   connection,
//   userToUpdate,
//   dataToUpdate,
//   dataUpdate,
//   DataToUpdate,
//   functionToCallWhenDone
// ) {
//   connection.query(
//     "UPDATE user SET city = ? WHERE id = ?;",
//     [dataUpdate, userToUpdate],
//     functionToCallWhenDone
//   );
// }

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
};
