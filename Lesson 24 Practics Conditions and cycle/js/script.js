"use strict"

const numberOfFilms = +prompt('Скільки фільмів Ви переглянули', '');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};


for(let i = 0; i < 2; i++) {
  const a = prompt('Назва одного з останніх переглянутих фільмів', '');
  const b = prompt('На скільки Ви б його оцінили', '');
  if(a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('Done!');
  } else {
    console.log('error');
    //повертаємось до попередньої ітерації
    i--;
  }
}

if(personalMovieDB.count < 10) {
  console.log('Переглянуто дуже мало фільмів');
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('Ви класичний глядач');
} else if (personalMovieDB.count >= 30) {
  console.log('Ви справжній кіноман');
} else {
  console.log('Виникла помилка');
}

console.log(personalMovieDB);







