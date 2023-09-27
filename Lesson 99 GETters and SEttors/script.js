'use strict';

const persone = {
  name: "Alex",
  age: 25,

  get userAge() {//отримуємо значення
    return this.age;
  },

  set userAge(num) {//встановлюємо значення
    this.age = num;
  }
};

console.log(1, persone.userAge);//без виклику ()
console.log(2, persone.userAge = 30);