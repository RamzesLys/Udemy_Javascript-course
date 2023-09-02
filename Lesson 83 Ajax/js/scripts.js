'use strict'

const inputUAH = document.querySelector('#uah'),
      inputUSD = document.querySelector('#usd');

inputUAH.addEventListener('input', () => {
  const request = new XMLHttpRequest();

  //request.open(method, url, async, login, pass) (get\post, шлях відносно сторінки html, інші необов'язкові)
  request.open('GET', 'js/current.json');
  
});