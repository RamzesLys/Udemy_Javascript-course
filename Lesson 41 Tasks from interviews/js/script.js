"use strict"

//TASK 1
// let x = 5;

//видасть 5
// alert(x++)

//видасть 6
// alert(++x)


//TASK 2
console.log(typeof([] + false)); // false

console.log([] + false - null); // NaN

console.log([] + false - null + true); // NaN


//TASK 3
// let y = 1;
// let x = y = 2;
// alert(x) //2

//TASK 4
console.log([] + 1 + 2); //'12'

//TASK 5
// alert("123r34234"[5])//4

//TASK 6
console.log(2 && 1 && null && 0 && undefined);//null

//TASK 7
console.log(!!(1 && 2) === (1 && 2)); //false

//TASK 8
//alert(null || 2 && 3 || 4);//3 пріоритет операторів

//TASK 9
const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a == b); //false різні назви змінних

//TASK 10
console.log(+"Infinity");// Infinity 
console.log(typeof(+"Infinity"));// number

//TASK 11

console.log('Їжачок' > 'Яблуко');//false

//TASK 12
console.log(0 || '' || 2 || undefined || true || false);//2