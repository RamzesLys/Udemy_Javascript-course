'use strict'

// let k = 0;

// function count() {
//   for (let i = 0; i < 1e9; i++) {
//     k++;
//   }
//   alert('done')
// }

// count()
setTimeout (() => {
  console.log(1);
}, 0); //виконається останньою, по замовчуванню встановлюється 4 мс

console.log(2);