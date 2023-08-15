const btn = document.querySelector('.btn');
let timerId,
    i = 0;



btn.addEventListener('click', () => {
  // const timerID = setTimeout(logger, 2000);
  timerId = setInterval(logger, 200);

})

// const timerId = setTimeout(function (text) {
//   console.log(1, text);
// }, 2000, 'Hello');

//першим аргументом виступає функція, що має запуститися
//другим аргументом виступає час у млс
//третім аргуметом виступає аргумент для функції що запускається


//аргументом можна передавати назву функції, яка створена окремо
// const timerID = setTimeout(logger, 2000);

//clearInterval(timerID) //скидує Інтервал після виконання функції

function logger () {
  if (i === 3) {
    clearInterval(timerId)
  }
  console.log(2, 'Привіт');
  i ++

}
