"use strict"

// let number = 5;debugger

// function logNumber() {
//   console.log(number);debugger
// }

// number = 6;

// logNumber();debugger


// number = 8;

// logNumber();debugger

function  createCounter () {
  let counter = 0;

  const myFunction = function () {debugger
    counter = counter + 1;debugger
    return counter;debugger
  }
  return myFunction;
}
debugger

const increment = createCounter();debugger
const c1 = increment();debugger
const c2 = increment();debugger
const c3 = increment();debugger


console.log(c1, c2, c3);

//{
//   let msg = 'Hello'
// }
// console.log(msg);

// for (let i = 0; i < 9; i ++) {
//   for(let j = 0; j < 9; j ++) {
//     let num = 3;
//     console.log(num);
//   }

// }


//Задачі з тестування
if (1) {
  console.log('Done!')
}

// const result = getSum(5, 6);
// const getSum = function(a, b) {
//     return a + b;
// }

console.log(typeof(NaN));

for (let i = 1; i < 5; i++) {
  console.log(i + 1)
}

function foo(a,b) {
  const [first] = a;
  const {eng} = b;

  return `${first} ${eng}`;
}

const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'})
console.log(result);

let time = '';
5 > 3 || 2 ? time = 'Day' : time = 'Night' 
console.log(time);