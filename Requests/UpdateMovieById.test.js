const { UpdateMovieById } = require("./UpdateMovieById");

const connectionMock = {
  query: jest.fn((sql, callback) => callback(null, {})),
};

test("Update movie 99: check the sql request ", (done) => {
  UpdateMovieById(connectionMock, 99, "Title", "Dummy Title Modified", () => {
    console.log(connectionMock.query);
    expect(connectionMock.query.mock.calls[0][0]).toBe(
      "UPDATE movies SET Title = 'Dummy Title Modified' WHERE id = 99;"
    );

    done();
  });
});
