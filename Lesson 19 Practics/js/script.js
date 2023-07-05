"use strict"

const numberOfFilms = +prompt('Скільки фільмів Ви переглянули', '');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt('Назва одного з останніх переглянутих фільмів', ''),
      b = prompt('На скільки Ви б його оцінили', ''),
      c = prompt('Назва одного з останніх переглянутих фільмів', ''),
      d = prompt('На скільки Ви б його оцінили', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


