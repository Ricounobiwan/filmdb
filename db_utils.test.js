const dbutils = require("./db_utils");

function testSelectAllMovies() {
  const connection = dbutils.createConnection("root", "root", "cinemaDB");
  dbutils.selectAllMovies(connection, (err, data) => {
    console.log(err);
    if (data.length === 0) {
      console.log("There should be some data but didn't find any...");
    }

    console.log(data);
    connection.end();
  });
}

testSelectAllMovies();

/*
 * ====================================== TODO
 */
// function testSelectUser() {
//   let connection = dbutils.createConnection("root", "root", "nodedb");
//   dbutils.getUsers(connection, (err, data) => {
//     console.log(err);
//     if (data.length === 0) {
//       console.log("il devrait y avoir des données");
//     }

//     console.log(data);
//     connection.end();
//   });
// }

// function testInsertUser(dataToInsert) {
//   let connection = dbutils.createConnection("root", "root", "nodedb");
//   dbutils.insertUser(connection, dataToInsert, (err, data) => {
//     console.log(err);
//     if (data.length === 0) {
//       console.log("il devrait y avoir des données");
//     }
//     console.log(data);
//     connection.end();
//   });
// }
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
// function testUpdateUserCity(userToUpdate, dataToUpdate, dataUpdate) {
//   let connection = dbutils.createConnection("root", "root", "nodedb");
//   dbutils.updateUserCity(
//     connection,
//     userToUpdate,
//     dataToUpdate,
//     dataUpdate,
//     dataToUpdate,
//     (err, data) => {
//       if (err) {
//         console.log("ERROR: ", err);
//       }
//       if (data.length === 0) {
//         console.log("No Data Available");
//       }
//       console.log(data);
//       connection.end();
//     }
//   );
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
