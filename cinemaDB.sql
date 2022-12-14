# CREATE DATABASE cinemaDB;
use cinemaDB;
DROP TABLE movies;

DELETE FROM movies;

INSERT INTO movies (id, rankIMDb, Title, Genre, ReleaseYear, Plot, ImageURL, VideoURL, Actor1, Actor2, Actor3, Director)  
VALUES('1', '1', 'Dangerous Liaisons', 'Drama', '1988', 'A scheming widow and her manipulative ex-lover make a bet regarding the corruption of a recently married woman.', 'https://i.pinimg.com/originals/f1/cc/4b/f1cc4b3bd378c553a5c9b1d78491b1ce.png', 'VideoURL', 'John Malkovitch', 'Michelle Pfeiffer', 'Glenn Close', 'Stephen Frears');
INSERT INTO movies (id, rankIMDb, Title, Genre, ReleaseYear, Plot, ImageURL, VideoURL, Actor1, Actor2, Actor3, Director)  
VALUES('2', '2133', 'The Age Of Innocence', 'Drama', '1993', 'A tale of nineteenth-century New York high society in which a young lawyer falls in love with a woman separated from her husband, while he is engaged to the womans cousin.', 'https://i.pinimg.com/originals/f1/cc/4b/f1cc4b3bd378c553a5c9b1d78491b1ce.png', 'VideoURL', 'Daniel Day-Lewis', 'Michelle Pfeiffer', 'Winona Ryder', 'Martin Scorsese');
INSERT INTO movies (id, rankIMDb, Title, Genre, ReleaseYear, Plot, ImageURL, VideoURL, Actor1, Actor2, Actor3, Director)  
VALUES('3', '68', 'The Shawshank Redemption', 'Drama', '1994', 
		'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', 'https://i.pinimg.com/originals/f1/cc/4b/f1cc4b3bd378c553a5c9b1d78491b1ce.png', 'VideoURL', 
        'Morgan Freeman', 'Tim Robbins', 'Bob Gunton', 'Frank Darabont');
INSERT INTO movies (id, rankIMDb, Title, Genre, ReleaseYear, Plot, ImageURL, VideoURL, Actor1, Actor2, Actor3, Director)  
VALUES('4', '2200', 'The Fabulous Baker Boys', 'Comedy', '1989', 
		'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', 
        'https://i.pinimg.com/originals/f1/cc/4b/f1cc4b3bd378c553a5c9b1d78491b1ce.png', 'VideoURL', 
        'Jeff Bridges', 'Beau Bridges', 'Michelle Pfeiffer', 'Steve Kloves');
        
INSERT INTO movies (id, rankIMDb, Title, Genre, ReleaseYear, Plot, ImageURL, VideoURL, Actor1, Actor2, Actor3, Director)  
VALUES('5', '2300', 'Scarface', 'Crime', '1983',
'In 1980 Miami, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.', 
'https://i.pinimg.com/originals/f1/cc/4b/f1cc4b3bd378c553a5c9b1d78491b1ce.png', 'VideoURL', 
'Al Pacino', 'Steven Bauer', 'Michelle Pfeiffer', 'Brian De Palma');

# NOT DONE:
INSERT INTO movies (id, rankIMDb, Title, Genre, ReleaseYear, Plot, ImageURL, VideoURL, Actor1, Actor2, Actor3, Director)  
VALUES('6', '2300', 'Your Name', 'Comedy', '2016',
'Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?', 
'https://www.kino.dk/sites/default/files/movie-posters/yournameplakat_0.jpg', 'VideoURL', 
'Ry??nosuke Kamiki', 'Mone Kamishiraishi', 'Ry?? Narita', 'Makoto Shinkai');

INSERT INTO movies (id, rankIMDb, Title, Genre, ReleaseYear, Plot, ImageURL, VideoURL, Actor1, Actor2, Actor3, Director)  
VALUES('99', '999', 'Dummy', 'Comedy', '2016',
'Dummy Dummy Dummy', 
'DummyURL', 'DummyVideoURL', 
'Ry??nosuke Kamiki', 'Mone Kamishiraishi', 'Ry?? Narita', 'Makoto Shinkai');

SELECT COUNT(id) as NbOfMovies, Director FROM movies GROUP BY Director order by COUNT(id);

SELECT COUNT(id) as NbOfMovies, Actor1 FROM movies GROUP BY Actor1 order by COUNT(id);
SELECT COUNT(id) as NbOfMovies, Actor2 FROM movies GROUP BY Actor2 order by COUNT(id);



CREATE TABLE movies (
	id INT not null primary key,
	rankIMDb INT,
	Title VARCHAR(70) NOT NULL,
    Genre VARCHAR(50),
	ReleaseYear INT NOT NULL,
    Plot VARCHAR(256),
	ImageURL VARCHAR(128),
    VideoURL VARCHAR(128),
	Actor1 VARCHAR(20),
    Actor2 VARCHAR(20),
    Actor3 VARCHAR(20),
	Director VARCHAR(70)
);

# id, rankIMDb, Title, Genre, ReleaseYear, Plot, ImageURL, VideoURL, Actor1, Actor2, Actor3, Director

# The Age of innocence
# 
# Shawshank: 
# Baker boys: 

UPDATE movies
SET ImageURL = 'https://originalvintagemovieposters.com/wp-content/uploads/2015/05/Shawshank-Redemption-3205LB.jpg'  
WHERE id = 3;


SELECT * from movies;
DELETE FROM movies where id=7;

# ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY ???root???;
