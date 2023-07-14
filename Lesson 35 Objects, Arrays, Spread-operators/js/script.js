"use strict"

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
  a: 5,
  b: 1
};

const copy = obj; // Передається посилання на оригінальний об'єкт, а не копія. Тому модифікуються обидва об'єкти

copy.a = 10;

console.log(copy);
console.log(obj);

function  copy(mainObj) {
  let objCopy = {};
  let key;
  for(key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4
  }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10; //змінюється значення Х в обох об'єктах, адже таке копіювання є поверхневим (лише для першого рівня)

console.log(newNumbers);
console.log(numbers);

const add = {
  d: 17,
  e: 20
};

//console.log(Object.assign(numbers, add)); // об'єднання об'єктів

const clone = Object.assign({}, add);

clone.d = 20;
console.log(add);
console.log(clone);

//Інший метод копіювання
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'adadsadada';

console.log(newArray);
console.log(oldArray);

//Новий метод ES6 ES8 Spread-operators
const video = ['youtube', 'vimeo', 'ukrtube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'facebook', 'instagram'];

console.log(internet);

function  log (a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 7];

log(...num)//розбирає масив на окремі елементи

//Ще один спосіб

const array = ['a', 'b'];

const newAarray = [...array];


const q = {
  one: 1,
  two: 2
}

const newObj = {...q};


var doe = 'adasde';


