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
  const sqlString = `INSERT INTO movies (id, rankIMDb, Title, Genre, ReleaseYear, Plot, ImageURL, VideoURL, Actor1, Actor2, Actor3, Director) VALUES('${id}', '${rankIMDb}', '${Title}', '${Genre}', '${ReleaseYear}', '${Plot}', '${ImageURL}', '${VideoURL}', '${Actor1}', '${Actor2}', '${Actor3}', '${Director}');`;

  connection.query(sqlString, function (err, result) {
    if (err) throw err;
    console.log("Record updated = ", result.affectedRows);
    console.log(result);
    console.log("functionToCallWhenDone", functionToCallWhenDone);
    functionToCallWhenDone();
  });
}

module.exports = { insertMovie };
