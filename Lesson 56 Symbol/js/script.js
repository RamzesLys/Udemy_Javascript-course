'use strict'

// let id = Symbol('id');

// const obj = {
//   'name': 'Test',
//   [id]: 3,
//   getId: function() {
//     return this[id]
//   } 
  
// }

// // let id = Symbol('id');

// //можна без зазначення id
// // let id = Symbol();


// let id2 = Symbol('id');

// // obj[id] = 2;

// console.log('1', obj[id]);
// console.log('2', obj.getId());

// console.log('3', id == id2);// два різних об'єкти не зважаючи на однаковий опис ('id')

// for (let value in obj) {
//   console.log('4', value);//не показується Symbol
// }

// console.log('5', Object.getOwnPropertySymbols(obj));
// console.log('6', obj[Object.getOwnPropertySymbols(obj)[0]]);

const myAwesomeDB = {
  movies: [],
  actors: [],
  //id: 123// щоб не перезаписувався використовуємо Symbol
  [Symbol.for('id')]: 123
}

//Сторонній код

myAwesomeDB.id = '12123213213';

console.log(myAwesomeDB[Symbol.for('id')]);

console.log(myAwesomeDB);
