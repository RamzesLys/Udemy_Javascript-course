'use strict'

const arr = [1, 1, 2, 2, 4, 5, 6, 5];

const set = new Set(arr);

function unique(arr) {
  return Array.from(new Set(arr));
}



//створює новий масив без повторних чисел
console.log(1, set);

const arr2 = ['Alex', 'Nikolay', 'Alex', 'Olga', 'Anna', 'Olga'];
const set2 = new Set(arr2);

console.log(2, set2);

set2.add('Ivan');
set2.add('Ivan');//добавляє лише один елемент, без дублюючого
console.log(3, set2);

set2.delete('Ivan');//видаляє елемент
console.log(4, set2);

set2.has('Alex');// перевіряє на наявність, повертає булеве значення
console.log(5, set2.has('Alex'));

//set2.clear();// очищає масив
console.log(6, set2);

set2.size;//повертає розмір
console.log(7, set2.size);

//перебір через for of
for (let value of set2) {
  console.log(8, value);
}

//перебір через forEach
set2.forEach((value, valueAgaing, set2) => {
  console.log(9, value, valueAgaing);
})

console.log(10, set2.values());// значення

console.log(11, set2.keys());//ключі

console.log(12, set2.entries()); // ключі та значення


console.log('13', unique(arr2));
