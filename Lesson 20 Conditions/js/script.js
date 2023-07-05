"use strict"

if (4) {
  console.log('Ok!');
} else {
  console.log('Error');
}

const num = 50;
// if(num < 49) {
//   console.log('Error');
// } else if (num > 100) {
//   console.log('Забагато');
// } else {
//   console.log('Правильно');
// }
 

// (num === 50) ? console.log('Правильно') :  console.log('Error');


switch (num) {
  case 49:
    console.log('Неправильно');
    break;
    case 100:
    console.log('Неправильно');
    break;
    case 50:
    console.log('Вірно');
    break;
    default:
      console.log('Не цього разу');
      break;
}
 