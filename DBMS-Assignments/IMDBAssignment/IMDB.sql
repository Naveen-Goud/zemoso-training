create database IMDB;
use IMDB;
-- Creating the Movie table
CREATE TABLE Movie (
  movie_id INT PRIMARY KEY,
  movie_title VARCHAR(255),
  movie_release_date DATE,
  other_movie_details VARCHAR(255)
);

-- Creating the Actor table
CREATE TABLE Actor (
  actor_id INT PRIMARY KEY,
  actor_name VARCHAR(255),
  actor_birthdate DATE,
  other_actor_details VARCHAR(255)
);

-- Creating the TVSeries table
CREATE TABLE TVSeries (
  tvseries_id INT PRIMARY KEY,
  tvseries_title VARCHAR(255),
  tvseries_start_date DATE,
  tvseries_end_date DATE,
  other_tvseries_details VARCHAR(255)
);

-- Creating the ActsIn table
CREATE TABLE ActsIn (
  actor_id INT,
  movie_id INT,
  tvseries_id INT,
  role_name VARCHAR(255),
  FOREIGN KEY (actor_id) REFERENCES Actor(actor_id),
  FOREIGN KEY (movie_id) REFERENCES Movie(movie_id),
  FOREIGN KEY (tvseries_id) REFERENCES TVSeries(tvseries_id)
);
