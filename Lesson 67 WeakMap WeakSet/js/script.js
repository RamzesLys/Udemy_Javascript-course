'use strict'

let user = {name: 'Ivan'};

const arr = [user];

let map = new Map();
map.set(user, 'data');

let weakMap = new WeakMap();
weakMap.set(user, 'data')

user = null;

console.log(1, user);

console.log(2, arr);//посилання на об'єт залишається навіть якщо його видалено

console.log(3, map.keys());//посилання на об'єт залишається навіть якщо його видалено


//WEAKMAP

//У WeakMap ключами можуть виступати лише об'єкти
//У WeakMap відсутні методи keys, value, entries, for off
console.log(4, weakMap.has(user));

console.log(5, weakMap);

let cache = new WeakMap();

function cacheUser(user) {
  if (!cache.has(user)) {
    cache.set(user, Date.now())
  }
  return cache.get(user);
}

let lena = {name: 'Helen'};
let alex = {name: 'Alex'};

cacheUser(lena);
cacheUser(alex);

lena = null;

console.log(6, cache.has(lena));
console.log(7, cache.has(alex));

//WEAKSET
//тільки об'єкти, без примітивних даних
//підтримує лише add, has, delete
//немає get

let messages = [
  {text: 'Hello', from: 'John'}
]


