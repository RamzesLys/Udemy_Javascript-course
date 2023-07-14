
//1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.

//showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

//Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
  let str = '';

  if (arr.length === 0) {
    str = 'Семья пуста'
  } else {
    str = 'Семья состоит из: '
  }

  arr.forEach(function(member) {
    str += `${member} `
  });
  return str
};

console.log(showFamily(family));


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
  arr.forEach((city) => {
    console.log(city.toLowerCase());
  });
}

console.log(standardizeStrings(favoriteCities));
