'use script'

const app = '123';

const number = 1;

(function(){
  let number = 2;
  console.log(1, number);
  console.log(2, number + 3);
}())//анонімна функція, що визивається сама

console.log(3, number);

//об'єктний інтерфейс

const user = (function(){
  const privat = function () {
    console.log(4, 'I am privat!');
  };

  return {
    sayHello: privat
  };
}());

user.sayHello();