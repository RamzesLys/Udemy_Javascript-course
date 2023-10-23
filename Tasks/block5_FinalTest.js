// function getSum(a, b) {
//   function sum() {
//       console.log(this.a);
//       return a + b;
//   }

//   console.log(sum());
// }

// getSum(4, 5);

//6
const msg = 'Заявка №231';
 
const div = document.createElement('div');
div.style.background = 'red';
div.setAttribute('data-msg', true);
div.textContent(msg);
 
document.body.append(div);

//8
// const arr = [
//   {
//       name: 'Alex',
//       salary: 500
//   },
//   {
//       name: 'Ann',
//       salary: 1500
//   },
//   {
//       name: 'John',
//       salary: 2500
//   },
// ];

// const result = arr.map(item => Object.entries(item)[1][1]).reduce((sum, curr) => sum + curr)
// console.log(result)


//12
// async function makeRequest() {
//   return await fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(json => console.log(json))
// }

// makeRequest()

//13
// const promisify = (item, delay) =>
//     new Promise(resolve => setTimeout(() => resolve(item), delay));
 
// const a = () => promisify('a', 100);
// const b = () => promisify('b', 5000);
// const c = () => promisify('c', 3000);
 
// async function one() {
//     const promises = [a(), b(), c()];
//     const [outpu1, outpu2, outpu3] = await Promise.all(promises);
//     return `one is done: ${outpu1} ${outpu2} ${outpu3}`;
// }
 
// async function two() {
//     const promises = [a(), b(), c()];
//     const outpu1 = await Promise.race(promises);
//     return `two is done: ${outpu1}`;
// }
 
// async function three() {
//     const outpu1 = await a();
//     const outpu2 = await b();
//     const outpu3 = await c();
//     return `three is done: ${outpu1} ${outpu2} ${outpu3}`
// }
 
// one().then(console.log);
// two().then(console.log);
// three().then(console.log);

//14
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//       resolve('foo');
//   }, 1000);
//   setTimeout(() => {
//       reject('bar');
//   }, 900);
// });

// promise.then((value) => {
//   console.log(value);
// }).catch((e) => console.log(e))

//16
// let c = 4;
// function addX(x) {
//   return function(n) {
//      return n + x
//   }
// }
 
// const addThree = addX(3);
 
// let d = addThree(c);
// let res = addThree(c);
 
// console.log(res)

//18
// function foo(a,b) {
//   const [first, second] = a;
//   const {eng, ru} = b;

//   return `${second}, ${ru}`;
// }

// const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'})

//20
// if (0) {
//   console.log('first')
// } else if (NaN) {
//   console.log('second');
// } else if (' ') {
//   console.log('third');
// } else if (null) {
//   console.log('fourth');
// }

//30
// let y = 1; 
// let x = y = 2; 
// alert(x);

function setOptions(height, width, ...additional) {
  console.log(height, width, ...additional)
}

setOptions(400, 500, 'red', 'top');


////////////
function getSum(a, b) {
  function sum() {
      console.log(this.a);
      return a + b;
  }

  console.log(sum());
}

getSum(4, 5);

////////////////
let c = 4;
function addX(x) {
  return function(n) {
     return n + x
  }
}
 
const addThree = addX(3);
 
let d = addThree(c);
let res = addThree(c);
 
console.log(res)

///////////////////////
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve('foo');
  }, 1000);
  setTimeout(() => {
      reject('bar');
  }, 900);
});

promise.then((value) => {
  console.log(value);
}).catch((e) => console.log(e))