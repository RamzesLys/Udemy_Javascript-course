'use strict'

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

console.log(1, btns[0].classList.length); //кількість класів у певного елементу
console.log(2, btns[0].classList.item(1));//назва першого класу в першого елементу
console.log(3, btns[0].classList.add('red'));//добавляє клас
console.log(4, btns[0].classList.remove('blue'));//видаляє клас
console.log(5, btns[1].classList.toggle('blue'));//перемикає класи

// if (btns[1].classList.contains('red')) {
//   console.log(6, 'Є');
// } else {
//   console.log(7, 'Немає');
// }

btns[0].addEventListener('click', () => {
  //через contains
  // if (!btns[1].classList.contains('red')) {
  //   btns[1].classList.add('red');
  // } else {
  //   btns[1].classList.remove('red');
  // }

  //або через toggle
  btns[1].classList.toggle('red')
})

console.log(8, btns[0].className);

//ДЕЛУГУВАННЯ ПОДІЙ
wrapper.addEventListener('click', (event) => {
  if (event.target && event.target.tagName == 'BUTTON') {//замість tagName застосовують .matches("button.red")
    console.log(9, 'Hello');
  }
})

//через ForEach події не делегуються новоствореним елементам
btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    console.log(10, 'Привіт');
  })
})

const btn = document.createElement('button')
btn.classList.add('red');
wrapper.append(btn);