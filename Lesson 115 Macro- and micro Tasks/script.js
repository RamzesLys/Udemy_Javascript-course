setTimeout(() => {
  console.log('timeout');
});

Promise.resolve()
  .then(() => {
    console.log('promise');
  })

  queueMicrotask(() => {
    console.log('wow');
  })

Promise.resolve()
.then(() => {
  console.log('promise 2');
})

console.log('code');

  //Наглядне виконання
  //1. () => {}
  //2. Мікрозадачі: then/catch/finally/await
  //3. render сторінки
  //4. () => {}
  //5. ... п.1 