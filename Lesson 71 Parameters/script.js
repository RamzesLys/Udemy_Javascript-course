'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button')

const width = box.clientWidth;

const height = box.clientHeight;

const offWidth = box.offsetWidth;

const offHeight = box.offsetHeight;

const scrollWidth = box.scrollWidth;

const scrollHeight = box.scrollHeight;

console.log(1, width, height);

console.log(2, offWidth, offHeight);

console.log(3, scrollWidth, scrollHeight);

btn.addEventListener('click', () => {
  // box.style.height = box.scrollHeight + 'px';
  console.log(4, box.scrollTop);
});

console.log(5, box.getBoundingClientRect());

console.log(6, box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);

console.log(7, style.display);

console.log(8, document.documentElement.scrollTop);