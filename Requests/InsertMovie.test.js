const { InsertMovie } = require("./InsertMovie");

const movieData = [
  "100",
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

const connectionMock = {
  query: jest.fn((sql, callback) => callback(null, {})),
};

test("Insert movie 100: check the sql request ", (done) => {
  InsertMovie(connectionMock, movieData, () => {
    console.log(connectionMock.query);
    expect(connectionMock.query.mock.calls[0][0]).toBe(
      "INSERT INTO movies (id, rankIMDb, Title, Genre, ReleaseYear, Plot, ImageURL, VideoURL, Actor1, Actor2, Actor3, Director) VALUES('100', '999', 'Dummy', 'Comedy', '2016', 'Dummy Dummy Dummy', 'DummyURL', 'DummyVideoURL', 'Ryûnosuke Kamiki', 'Mone Kamishiraishi', 'Ryô Narita', 'Makoto Shinkai');"
    );

    done();
  });
});
