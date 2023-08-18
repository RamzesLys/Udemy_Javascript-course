'use strict'

const now = new Date()//(2020, 5, 1, 20, 40, 15);

//обрахунок у мілісекундах починається від 01 січня 1970
console.log(1, now);

console.log(2, now.getFullYear());// поточний рік

console.log(3, now.getMonth());// поточний місяць (починається з 0)

console.log(4, now.getDate());// поточний дата

//інші команди.getMinutes, .getSeconds та ін.

console.log(5, now.getDay()); //номер дня тижня (починається з неділі та 0)

console.log(6, now.getHours());//місцевий час 

console.log(7, now.getUTCHours());//всесвітній час по UTC (-3 год.)

console.log(8, now.getTimezoneOffset()); // різниця між місцевим та всесвітнім часом у хвилинах

console.log(9, now.getTime()); //кількість мілісекунд від 01.01.1970. 
//Якщо значення використати у якості аргументу new Date(1692355196211), поверне час

console.log(10, now.setHours(50));//

//new Date.parse('2020-05-01')

let start = new Date();

for (let i = 0; i < 100000; i++) {
  let some = i ** 3; //зведення у ступінь
}

let end = new Date();

console.log(11, `Цикл відпрацював за ${end - start} міллісекунд`);



