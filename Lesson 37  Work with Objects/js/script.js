"use strict"

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    personalMovieDB.count = +prompt('Скільки фільмів Ви переглянули', '');
    while ( personalMovieDB.count == '' ||  personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Скільки фільмів Ви переглянули', '');
    }
  },
  rememberMyFilms: function () {
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
  },
  detectPerdonalLevel: function() {
    if(personalMovieDB.count < 10) {
      console.log('Переглянуто дуже мало фільмів');
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Ви класичний глядач');
    } else if (personalMovieDB.count >= 30) {
      console.log('Ви справжній кіноман');
    } else {
      console.log('Виникла помилка');
    }
  },
  showMyDB: function(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function () {
    // for(let i = 1; i <= 3; i++)
    //до варіанту 2
    for(let i = 1; i < 2; i++) {
     
      //варіант 1
      // let genre = prompt(`Ваш улюблений жанр під номером ${i}`);
      // if (genre === '' || genre == null) {
      //   console.log('Ви ввели некоректні дані або не ввели їх');
      //   i --
      // } else {
      //   personalMovieDB.genres[i - 1] = genre; 
      // } 
      
      //варіант 2
      let genres = prompt(`Введіть улюблені жанри через кому`).toLowerCase();
      if (genres === '' || genres == null) {
          console.log('Ви ввели некоректні дані або не ввели їх');
          i --
        } else {
          personalMovieDB.genres = genres.split(', ');
          personalMovieDB.genres.sort(); 
        } 
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Улюблений жанр ${i + 1} - це ${item}`);
    });
  }
};




