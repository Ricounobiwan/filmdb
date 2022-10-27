function SelectMoviesByCriteria(
  connection,
  fieldToSearch,
  valueToSearch,
  functionToCallWhenDone
) {
  console.log(
    "@selectMoviesByCriteria: fieldToSearch, valueToSearch ",
    fieldToSearch,
    valueToSearch
  );

  connection.query(
    `SELECT * FROM movies WHERE ${fieldToSearch} = ?`,
    [valueToSearch],
    functionToCallWhenDone
  );
}

module.exports = { SelectMoviesByCriteria };
