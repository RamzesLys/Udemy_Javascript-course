"use strict"

let num = 20;

function showFirstMessage(text) {
  console.log(text);
  let num = 10;
  console.log(num);
}

showFirstMessage('Hello Fuction');
console.log(num);

function calc(a, b) {
  return a + b;
}
console.log(calc(5,5));

function ret() {
  let num = 50;
  return num;
}

const anotherNum = ret();
console.log(anotherNum);


const loger = function () {
  console.log('Hello Expression');
};

loger();

const calc = (a, b) => {
  console.log('111');
  return a + b;
}

calc(5,7)




