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

function testDeleteMovieById(movieId) {
  dbutils.DeleteMovieById(connection, movieId, (err) => {
    if (err) console.log(err);
    return true;
  });
}

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
testUpdateMovieById("99", "Title", "Dummy Title Modified");

// ======================================
// ======================================

/*
 * ====================================== TODO
 */
// function testGetUserCount() {
//   let connection = dbutils.createConnection("root", "root", "nodedb");
//   dbutils.getUserCount(connection, (err, data) => {
//     if (err) {
//       console.log(err);
//       return;
//     }

//     if (data.length === 0) {
//       console.log("il devrait y avoir des données");
//     }

//     console.log("Count of Users: ", data);
//     console.log("typeOf: ", typeof data);
//     console.log("data[0].nUser: ", data[0].nUser);
//     connection.end();

//     for (let i = 0; i < data.length; i++) {
//       console.log(`${i}`, data[i]);
//     }
//   });
// }

// // testInsertUser({email: "bill@evans.com", city:"Los Angeles"});
// testGetUserCount();
// // testSelectUser();
// // testUpdateUserCity(4, "city", "Chicago");
// // testSelectUser();

// function buildUserUpdateQuery(fieldsToUpdate) {
//   let fields = fieldsToUpdate.map((e) => `${e} = ?`);
//   console.log("fields: ", fields);
//   let query = `UPDATE user set ${fields} `;
//   console.log("query: ", query);
// }
// // buildUserUpdateQuery(["city", "email"]);

module.exports = {
  testSelectAllMovies: testSelectAllMovies,
  testSelectMoviesByCriteria: testSelectMoviesByCriteria,
  testInsertMovie: testInsertMovie,
  testDeleteMovieById: testDeleteMovieById,
  testUpdateMovieById: testUpdateMovieById,
};
