/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
//Task 1 +
//const promoAdv = document.querySelector('.promo__adv');
// const promo = document.querySelector('.promo')
// promo.removeChild(promoAdv);
///////////////////////////

const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = document.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list');

adv.forEach((item) => {
    item.remove();
})

//Task 2 +
// const promoGenre = document.querySelector('.promo__genre');
// promoGenre.textContent = 'Драма';
///////////////////////////
genre.textContent = 'Драма';

//Task 3 -
//promoBg.innerHTML = 'background: url(./img/bg.jpg)';
//promo.style.background = `url(./img/bg.jpg) center center no-repeat`;
/////////////////////////////////////////
poster.style.backgroundImage = `url(./img/bg.jpg)`

//Task 4 -
////////////////////////////
movieList.innerHTML = "";

//Task 5 
//////////////////////////
movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
  movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
        <div class="delete"></div>
    </li>
  `;
})


