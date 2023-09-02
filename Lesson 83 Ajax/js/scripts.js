'use strict'

const inputUAH = document.querySelector('#uah'),
      inputUSD = document.querySelector('#usd');

inputUAH.addEventListener('input', () => {
  const request = new XMLHttpRequest();

  //request.open(method, url, async, login, pass) (get\post, шлях відносно сторінки html, інші необов'язкові)
  request.open('GET', 'js/current.json');
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.send();
  
  //Властивості
  //status = 404, 0, 200
  //statusText = ок, не знайдено та ін
  //response = відповідь серверу
  //readyState = поточний стан запиту

  //Події

  //readystatechange використовується рідко

  // request.addEventListener('readystatechange', () => {
  //   if (request.readyState === 4 && request.status === 200) {
  //     console.log(request.response);
  //     const data = JSON.parse(request.response);
  //     inputUSD.value = (+inputUAH.value / data.current.usd).toFixed(2);// toFixed () кількість символів після крапки
  //   } else {
  //     inputUSD.value = 'Щось пішло не так'
  //   }
  // });

  //частіше використовують load, коли запит пройшов
    request.addEventListener('load', () => {
    if (request.status === 200) {
      const data = JSON.parse(request.response);
      inputUSD.value = (+inputUAH.value / data.current.usd).toFixed(2);// toFixed () кількість символів після крапки
    } else {
      inputUSD.value = 'Щось пішло не так'
    }
  });

  
});