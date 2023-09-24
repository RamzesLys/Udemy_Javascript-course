'use strict'

//localStorage.setItem('number', 5)//задаються key and value, зберігаються у браузері - Application - Local Storage

//localStorage.removeItem('number')//видаляються значення

//localStorage.clear()//очищення

//console.log(localStorage.getItem('number'));// отримання значення

const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
  checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
  form.style.backgroundColor = 'red';
}

checkbox.addEventListener('change', () => {
  localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
  if (localStorage.getItem('bg') === 'changed') {
    localStorage.removeItem('bg');
    form.style.backgroundColor = '#fff';
  } else {
    localStorage.setItem('bg', 'changed');
    form.style.backgroundColor = 'green';
  }
});

const persone = {
  name: 'Alex',
  age: 27
};

const serializedPersone = JSON.stringify(persone);//переводимо у формат JSON
localStorage.setItem('alex', serializedPersone);
// localStorage.setItem('alex', persone);
console.log(localStorage.getItem('alex'));