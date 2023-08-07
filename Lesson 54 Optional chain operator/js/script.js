'use strict'

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block);

// console.log(block?.textContent); //видає помилку, виконання коду припиняється - відсутній block

//виконання коду не припиняється
// if (block) {  
//   console.log(block.textContent);
// }


//інший варіант з використанням оператора опціонального ланцюжку

// console.log(block?.textContent); //undefined

// block?.textContent = '123';


console.log(1+2);

const userData = {
  name: 'Serg',
  age: null,
  say: () => {
    console.log('Say');
  }
}

// userData.say();
userData.hey?.();



//перевірка через if
// if (userData && userData.skills && userData.skills.js) {
//   console.log(userData.skills.js);
// }

//метод через оператор опційного ланцюжку
console.log(userData?.skills?.js);
