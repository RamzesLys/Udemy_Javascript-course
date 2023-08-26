'use strict';

function showThis(a, b) {
  console.log(1, this);
  function sum() {
    console.log(2, this);
    return a + b;
  }
  console.log(3, sum());
}

showThis(4, 5);

const obj = {
  a: 20,
  b: 15,
  sum: function() {
    console.log(4, this);
    function shout() {
      console.log(5, this);
    }
    shout();
  }
}
obj.sum()

function sayName(surname) {
  console.log(6, this);
  console.log(7, this.name);
  console.log(8, this.name + surname);
}

const user = {
  name: 'John'
};

//методи, що передають контекст
sayName.call(user, ' Smith'); // аргументи передаються через кому
//або 
// sayName.apply(user, [' Smith']); //аргументи передаються у масиві

function count (num) {
  return this * num
}

const double = count.bind(2)

console.log(9, double(3));
//1) Звичайна функція: this = window, але якщо 'use strict', то undefined
//2) Якщо контекст у методів об'єкту - сам об'єкт
//3) this  уконструкторах та класах - це новий екземпляр об'єкту
//4) ручна прив'язка this: call, apply, bind


const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//   console.log(10, this);
//   this.style.backgroundColor = 'red';
// });

//якщо через стрілочну функцію
btn.addEventListener('click', (e) => {
  console.log(10, this);
 e.target.style.backgroundColor = 'red';
});


//якщо функція написана у класичному режимі - this'ом буде сам об'єкт
//у стрілкової функції немає власного контексту виклику, вона його братиме у батьківського елементу

const obj2 = {
  num: 5,
  sayNumber: function() {
    const say = () => {
      console.log(11, this.num);
    };
    say();
  }
}

obj2.sayNumber();

const double2 = (a) => a * 2 // стрілочна функція

console.log(12, double2(5));
