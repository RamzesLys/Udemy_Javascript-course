'use strict'

// const name = 'Роман';

// try {
//   console.log('Normal');
//   console.log(a);//помилка
//   console.log(result);
// } catch (error) {
//   console.log(error.name);//назва помилки
//   console.log(error.message);//причина помилки
//   console.log(error.stack);//повне значення (обидва попередні)
// } finally {//виконується завжди
//   console.log(`Sorry, ${name} made a mistake`);
// }

// console.log('Still normal');

try {
  document.querySelector('.active').addEventListener('click', () => {
    console.log('click');
  });  
} catch (error) {
  console.log('Елемент відсутній', error);
}
console.log('Work');