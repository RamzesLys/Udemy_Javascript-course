'use strict';

//forEach не повертає новий масив


//FILTER - повертає новий масив, який відповідає умові
const names = ['Ivan', 'Ann', 'Roman', 'Voldemar'];
const shortNames = names.filter(function(name) {
  return name.length < 5;
});
console.log(shortNames);

//MAP - повертає новий масив з трансформованими даними
//1 
// const answers = ['IvAn', 'AnnA', 'Hello'];
// const result = answers.map((item) => item.toLowerCase());
//console.log(result);

//2
//або перезаписуємо уснуючий масив
let answers = ['IvAn', 'AnnA', 'Hello'];
answers = answers.map((item) => item.toLowerCase());
console.log(answers);

//ПРАВИЛЬНО ВИКОРИСТОВУВАТИ МЕТОД 1

//EVERY - всі елементи відповідають умові - повертає true або false
//SOME - один з елементів відповідає умові - повертає true або false

const some = [4, 'addds', 'asdawdf'];
console.log(some.some(item => typeof(item) === 'number'));

console.log(some.every(item => typeof(item) === 'number'));

//REDUCE - збирає масиви в одне ціле
const arr = [4, 5, 3, 2, 6, 1];
const res = arr.reduce((sum, current) => sum + current, 3); //3 - початковий елемент, за наявності якого обрахунок починається з нього
        //1 етап 0    4
        //2 етап 4    5
        //3 етап 9    3
        // ...
console.log(res);

const stringArr = ['apple', 'pear', 'plum'];
// const stringRes = stringArr.reduce((sum, current) => sum + ', ' + current)
//АБО
const stringRes = stringArr.reduce((sum, current) => `${sum}, ${current}`)
console.log(stringRes);

//ПІДСУМКОВИЙ ПРИКЛАД

const obj = {
  ivan: 'persone',
  ann: 'persone',
  dog: 'animal',
  cat: 'animal'
};

const newArr = Object.entries(obj)
      .filter(item => item[1] === 'persone')
      .map(item => item[0]);
console.log(newArr);


