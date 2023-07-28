'use strict'

const btns = document.querySelectorAll('button');
const overlay = document.querySelector('.overlay')


//1 спосіб
// btn.onclick = function () {
//   alert('Clickkkkk');
// };

// btn.onclick = function () {
//   alert('Second clickkkkk');
// };

//2 спосіб видалення елементу
let i = 0;

const deleteElem = (e) => {
 console.log(e.currentTarget);
 console.log(e.type);
//  i ++;
//  if( i = 1) {
//   btn.removeEventListener('click', deleteElem);
//  }

}

// btn.addEventListener('click', deleteElem);

// overlay.addEventListener('click', deleteElem);

btns.forEach(btn => {
  btn.addEventListener('click', deleteElem, {once: true})
})  

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
  event.preventDefault();//прибирає стандартну поведінку
  console.log(event.target);
});

