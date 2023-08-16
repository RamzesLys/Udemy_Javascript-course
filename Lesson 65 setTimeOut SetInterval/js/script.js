// function func() {
//   smth = 'string';
// }
//

// const someRes = getData();
// const node = document.querySelector('.class');

// setInterval(function () {
//   if (node) {
//     node.innerHTML = someRes;
//   }
// }, 1000);

// function outer() {
//   const potentialHugeArray = [];
//   return function inner () {
//     potentialHugeArray.push('Hello');
//     console.log(1, 'Hello');
//   }
// }

// const sayHello = outer();

function  createElement() {
  const div = document.createElement('div');
  div.id = 'test';
  document.body.append(testDiv);
}

createElement();

function deleteElement () {
  document.body.removeChild(document.getElementById('test'))
}

deleteElement()