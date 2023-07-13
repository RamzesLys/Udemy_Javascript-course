"use strict"

function first() {
  setTimeout(function () {
    console.log('Затримка');
  }, 1400);
  setTimeout(function () {
    console.log('Затримка менша');
  }, 1000);
  setTimeout(function () {
    console.log('Затримка більша');
  }, 2000) 
}

first()

function second() {
  console.log('Без затримки');
}

second()

function learnJS(lang, callback) {
  console.log(`I learn ${lang}`);
  callback();
}

function done( ) {  
  console.log('Я пройшов');
}

learnJS('Javascript', done);