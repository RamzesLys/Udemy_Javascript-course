'use strict'

//pattern - шаблон

//new RegExp('pattern', 'flags');

//нижче скорочений синтаксис
//             /pattern/

// const ans = prompt(`Введіть Ваше ім'я`);


let reg = /n/ig;

// Флаги 
// i - знайти щось незалежне від регістру
// g - global кілька входжень відразу
// m - багатостроковий режим

//SEARCH
// console.log(ans.search((reg)));

//MATCH
// console.log(ans.match((reg)));

// const pass = prompt('Ваш пароль');

//REPLACE
// console.log(pass.replace(/\./g, "*"));
// . - означає що ми беремо всі елементи, що попадають у стркоу (як * в СSS)
// g - всі елементи замінюємо на *
// \ - екрануємо символ (робимо його не спеціальним символом, а просто крапкою)

//console.log('12-34-56'.replace(/-/g, ':')); // у replace 2 аргументи (1 - що шукаємо, 2 - на що замінюємо) з 12-34-56 на 12:34:56


//TEST
//console.log(reg.test(ans));// повертає true або false

//Класи
//  \d -дігенс - шукаємо цифри
// \w - шукаємо всі літери
// \s - шукаємо пробіли

reg = /\d/g; // шукаємо всі цифри
//console.log(ans.match(reg)); // повертає лише цифри

const str = 'My name is R2D2';

console.log(str.match(/\D/ig));

//Зворотні класи

//великими літерами

// \D - не цифри
// \W - не букви