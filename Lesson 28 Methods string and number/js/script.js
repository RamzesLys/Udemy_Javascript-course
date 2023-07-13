"use strict"

//Methods for String
const str = 'test';
const arr = [1, 2, 3, 4, 5, 6]

console.log(str.length);
console.log(arr.length);
console.log(str.toLocaleUpperCase());
console.log(str.toLowerCase());


const fruit = "Some fruit";
console.log(fruit.indexOf("q"));

const logg = 'Привіт, ';
console.log(logg.slice(0,6));

console.log(logg.slice(-4, -2));

console.log(logg.substring(3, 7));

console.log(logg.substr(0, 3));

//Methods for Number
// const num = 12.2;
// console.log(Math.round(num));

const test = '12.2px';
console.log(parseInt(test));