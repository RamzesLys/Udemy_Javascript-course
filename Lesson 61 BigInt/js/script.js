'use strict'

const bigInt = 12123132344345454234234324244556456456456n; //n в кінці перетворює число в BigInt
//або
const sameBigInt = BigInt(12123132344345454234234324244556456456456);

console.log(1, typeof(bigInt));
console.log(2, typeof(sameBigInt));

//1. bigInt  не працює з методами зі встроєним об'єктом Math
//2. bigInt не можна змішувати зі звичайними числами

//console.log(3, 5n + 1);//помилка
//console.log(4, sameBigInt + 3);//помилка
//console.log(5, Math.round(bigInt));//помилка

console.log(6, bigInt + sameBigInt, 1n + 2n);

console.log(7, 5n / 2n);//повертає округлений варіант без дробей

console.log(8, 2n > 1);//працює, повертає булеве значення

//конвертація зі звичайного числа в BigInt
let bigInt2 = 1n;
let number = 2;

console.log(9, bigInt2 + BigInt(number));

//зворотня конвертація з BigInt у звичайне число
console.log(10, Number(bigInt2) + number);