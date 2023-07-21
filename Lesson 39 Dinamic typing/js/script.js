"use strict"

//To String перетворення у строку

//1) застарілий спосіб
console.log(typeof(String(null)));
console.log(typeof(String(4)));

//2)
console.log(typeof(5 + ''));

const num = 5;

console.log('https://facebook.com/' + num);
//або
console.log(`https://facebook.com/${num}`);

const fontSize = 26 + 'px';


//To Number

//1) застарілий спосіб
console.log(typeof(Number('4')));

//2) унарний плюс
console.log(typeof(+ '5'));

//3)
console.log(typeof(parseInt("15px", 10)));


let answ = +prompt("Hello", '')


//to Boolean
//1)
//завжди false --- 0, '', null, undefined, Nan; 

let switcher = null;

if (switcher) {
  console.log(`Working...${switcher}`);
}

//2)
console.log(typeof(Boolean('4')));

//3)
console.log(typeof(!!'4444'));