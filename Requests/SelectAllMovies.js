function selectAllMovies(connection, functionToCallWhenDone) {
  connection.query("SELECT * FROM movies", functionToCallWhenDone);
}

module.exports = { selectAllMovies };
