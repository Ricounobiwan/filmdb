// import { something } from "./something";
const { selectAllMovies } = require("./selectAllMovies");
const dbutils = require("../db_utils");
const connection = dbutils.createConnection("root", "root", "cinemaDB");

test("Have at least one movie ", () => {
  selectAllMovies(connection, (err, data) => {
    console.log(err);
    if (data.length === 0) {
      console.log("There should be some data but didn't find any...");
    }

    expect(data.length > 0).toBe(true);

    console.log(data);
    // connection.end();
  });
});
