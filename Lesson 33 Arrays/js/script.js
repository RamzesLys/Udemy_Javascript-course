"use strict"

const arr = [14, 52, 45, 64, 7, 38, 9];
arr.sort(compareNum)
console.log(arr);

function compareNum(a, b) {
  return a - b;
}

// arr[9] = 0;
// console.log(arr.length);


//варіант 3 для перебору масива
//forEach не має brake та continue
// arr.forEach(function(item, i, arr) {
//   console.log(`${i}: ${item} всередині масиву ${arr}`);
// })

//видалення останього елементу
// arr.pop();

//додає новий елемент в кінець 
// arr.push(7);

//shift() та unshift() додає та прибирає перший елемент у масиві, використання небажано через подальшу зміну індексів у всьому масиві


// console.log(arr);


//варіант 1 для перебору масива 
// for (let i = 0; i < arr.length; i ++) {
//   console.log(arr[i]);
// }


//варіант 2 для перебору масива 
// for (let value of arr) {
//   console.log(value);
// }

// const str = prompt("", "");
const products = str.split(", ")
products.sort()
console.log(products.join('; '));