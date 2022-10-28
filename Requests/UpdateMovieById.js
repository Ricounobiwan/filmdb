function updateMovieById(
  connection,
  MovieIdToUpdate,
  MovieDataToUpdate,
  dataForUpdate,
  functionToCallWhenDone
) {
  const sql = `UPDATE movies SET ${MovieDataToUpdate} = '${dataForUpdate}' WHERE id = ${MovieIdToUpdate};`;

  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Record updated = ", result.affectedRows);
    console.log(result);
    console.log("functionToCallWhenDone", functionToCallWhenDone);
    functionToCallWhenDone();
  });
}

module.exports = { updateMovieById };
