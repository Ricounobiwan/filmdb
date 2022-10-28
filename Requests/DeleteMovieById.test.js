const { deleteMovieById } = require("./deleteMovieById");

const connectionMock = {
  query: jest.fn((sql, callback) => callback(null, {})),
};

test("Delete one movie and check if still there ", (done) => {
  deleteMovieById(connectionMock, 99, () => {
    console.log(connectionMock.query);
    expect(connectionMock.query.mock.calls[0][0]).toBe(
      "DELETE FROM movies WHERE id = 99; "
    );

    done();
    // connection.end();
  });
});
