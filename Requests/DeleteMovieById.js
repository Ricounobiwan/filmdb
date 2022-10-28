function deleteMovieById(connection, movieId, callback) {
  // Delete the records with address="Delhi"
  const sql = `DELETE FROM movies WHERE id = ${movieId}; `;

  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Record deleted = ", result.affectedRows);
    console.log(result);
    callback();
  });
}

module.exports = { deleteMovieById };
