"use strict"

let numberOfFilms;


function start() {
  numberOfFilms = +prompt('Скільки фільмів Ви переглянули', '');
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Скільки фільмів Ви переглянули', '');
  }

}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};



function rememberMyFilms() {
  for(let i = 0; i < 2; i++) {
    const a = prompt('Назва одного з останніх переглянутих фільмів', '').trim();
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
}

rememberMyFilms();



function detectPerdonalLevel() {
  if(personalMovieDB.count < 10) {
    console.log('Переглянуто дуже мало фільмів');
  } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Ви класичний глядач');
  } else if (personalMovieDB.count >= 30) {
    console.log('Ви справжній кіноман');
  } else {
    console.log('Виникла помилка');
  }
}
// detectPerdonalLevel();


// function showMyDB() {
//  if(personalMovieDB.privat == false) {
//   console.log(personalMovieDB);
//  }
// }
// showMyDB();


//варіант з аргументами
function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for(let i = 1; i <=3; i++) {
    personalMovieDB.genres[i - 1] =  prompt(`Ваш улюблений жанр під номером ${i}`);
  }
}

writeYourGenres()