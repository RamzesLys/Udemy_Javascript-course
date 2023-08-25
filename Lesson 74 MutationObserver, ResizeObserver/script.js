'use strict';

const box = document.querySelector('.box');
let observer = new MutationObserver((mutationRecords) => {
  console.log(1, mutationRecords);
})

//відслідковування елементу
//першим аргументом зазначається об'єкт, який необхідно відслідковувати
//другим аргументом зазначаються налаштування MutationObserverInit 
observer.observe(box, {
  childList: true
})

//коли відсутня потреба слідувати за об'єктом
observer.disconnect();