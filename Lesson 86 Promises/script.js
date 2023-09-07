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
  setTimeout(() => {
    product.status = 'order';
    console.log(product);
  }, 2000);
});

