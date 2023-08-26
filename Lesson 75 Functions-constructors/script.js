'use strict';

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log(`Hello ${this.name}`);
  }
}

//створює ще один метод для об'єкту User
User.prototype.exit = function (name) {
  console.log(`Користувач ${this.name} пішов`);
}

//функція-конструктор
const ivan = new User ('Ivan', 28);
const alex = new User('Alex', 20);

ivan.exit();

ivan.hello();
alex.hello()


console.log(1, ivan);
console.log(2, alex);