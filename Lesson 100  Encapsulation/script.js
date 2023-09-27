'use strict';

class User {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  #surname = 'Vashchenko';// властивість стає приватною

  say = () => {
    console.log(1, `Ім'я користувача: ${this.name} ${this.#surname}, Вік користувача: ${this._age}`);
  }

  get age() {
    return this._age;
  }

  set age(age) {
    if(typeof age === 'number' && age > 0 && age < 110) {
      this._age = age;
    } else {
      console.log(2, 'Недопустимі значення!');
    }
  }
}

const ivan = new User('Ivan', 27);
console.log(3, ivan.age);
ivan.age = 99;
// console.log(4, ivan.userAge);
//console.log(5, ivan.getAge());

console.log(ivan.age);

//змінюємо дані
// ivan.userAge = 30;
// ivan.name = 'Alex';
// ivan.setAge(30);
// ivan.setAge(300);
//console.log(6, ivan.getAge());

console.log(7, ivan.surname);
ivan.say();