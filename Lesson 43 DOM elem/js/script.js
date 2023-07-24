'use strict';

const box = document.getElementById('box');
// console.log(box);

const btns = document.getElementsByTagName('button');
//console.log(btns);

const circles = document.getElementsByClassName('circle');
// console.log(circles);

const hearts = document.querySelectorAll('.heart');

// console.log(hearts);

const wrapper = document.querySelector('.wrapper');

hearts.forEach(item => {
  //console.log(item);
})

const oneHeart = document.querySelector('.heart');
// console.log(oneHeart);

const width = 550;

box.style.backgroundColor = '#000';
box.style.width = '500px';
box.style.cssText = `background-color: green; border-radius: 3em; width: ${width}px`;


btns[1].style.borderRadius = '100%';

circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i ++) {
//   hearts[i].style.backgroundColor = 'blue'
// }

hearts.forEach(item => {
  item.style.backgroundColor = 'green'
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут був я');


div.classList.add('black');

// wrapper.append(div); //вставляє дочірній елемент у кінці батьківського
// wrapper.prepend(div);//вставляє на початку батьківського

// hearts[0].after(div);

// circles[0].remove();

hearts[0].replaceWith(circles[0])



