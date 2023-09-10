'use strict';

//PROMISES

console.log('Запит даних ...');

const req = new Promise(function(resolve, reject) {//resolve - позитивний результат, reject - негативний
  setTimeout(() => {
    console.log('Підготовка даних');
  
    const product = {
      name: 'TV',
      price: 2000
    };
    resolve(product);
  }, 2000);
});


req.then((product) => {//опрацьовує позитивний результат resolve()
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      product.status = 'order';
      resolve(product);
    }, 2000);
  });
}).then((data) => {
  data.modify = true;
  return data;
}).then((data) => {
  console.log(data);
}).catch(() => { //якщо помилка (reject())
  console.error('Помилка');
}).finally(() => {
  console.log('Завдання виконано');
});

const test = time => {
  return new Promise(resolve => {
    setTimeout(() => 
      resolve(), time
    )
  });
};

// test(1000).then(() => {
//   console.log('1000 ms');
// })

// test(2000).then(() => {
//   console.log('2000 ms');
// })

Promise.all([test(1000), test(2000)]).then(() => {//спрацювали обидві функції
  console.log('All');
});


// Promise.race([test(1000), test(2000)]).then(() => {//спрацьовує після спрацюванні першої з функцій
//   console.log('All');
// })