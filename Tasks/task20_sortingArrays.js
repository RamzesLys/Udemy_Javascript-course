const films = [
  {
      name: 'Titanic',
      rating: 9
  },
  {
      name: 'Die hard 5',
      rating: 5
  },
  {
      name: 'Matrix',
      rating: 8
  },
  {
      name: 'Some bad film',
      rating: 4
  }
];

//Task 1
function showGoodFilms(arr) {
  return arr.filter(film => film.rating >= 8);
}
console.log(showGoodFilms(films));

//Task 2
function showListOfFilms(arr) {
  return arr.reduce((acc, current) => 
    `${typeof(acc) === 'object' ? acc.name: acc}, ${current.name}`
  )
}
console.log(showListOfFilms(films));

//Task 3
function setFilmsIds(arr) {
  return arr.map((film, idx) => {
    film.id = idx;
    return film
  })
}
console.log(setFilmsIds(films));

//Task 4
const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
  return arr.some((film) => film.id || film.id === 0
  )
}

console.log(checkFilms(tranformedArray));