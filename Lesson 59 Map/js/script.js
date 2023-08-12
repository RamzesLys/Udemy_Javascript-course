'use strict'

const user = {
  name: 'Alex',
  surname: 'Smith',
  birthday: "20/04/1993",
  showMyPublicData: function() {
  console.log((`${this.name} ${this.surname} ${this.birthday}` ));
  }
}

console.log('1 ', user);

console.log('2 ', user.showMyPublicData());

console.log('3', typeof(Object.keys(user)[0]));

const budget = [ 500, 1500, 2000]

const shops = [
  {rice: 500},
  {oil: 200},
  {bread: 50}
]

const map = new Map([
  [{paper: 400}, 8000]
]);

//для заповнення можна зробити це покроково
// map.set(shops[0], 5000)
//     .set(shops[1], 7000)
//     .set(shops[2], 6000);

//або через forEach

//!!!!!!!!!!!!!!!!!!!!!!!!!!!
shops.forEach((shop, i) => {
  map.set(shop, budget[i]);
})

console.log('4 ', map);

//для отримання
// console.log('5 ', map.get(shops[0]));

//перевірка наявності, повертає true або false
// console.log('6 ', map.has(shops[0]));

//видалення з карти
//map.delete(key);

//очищення карти
//map.clear();

//розмір карти
//map.size;

//повертає ітеруємий об'єкт по ключам
//map.keys();

const goods = [];

//перебір по ключам
for (let shop of map.keys()) {
  goods.push(Object.keys(shop)[0])
}
console.log('6 ', goods);

//перебір по значенням
for (let price of map.values()) {
  console.log('7 ', price);
}

//повертає масив з об'єктами
for (let price of map.entries()) {
  console.log('8 ', price);
}

//можна застосувати деструктуризацію
for (let [shop, price] of map.entries()) {
  console.log('9 ', shop, price);
}

//методом forEach
map.forEach((value, key, map) => {
  console.log('10 ', key, value);
});

//створюємо карту з об'єкту
const userMap = new Map (Object.entries(user));
console.log('11 ', userMap);

//з масиву створюємо об'єкт
const newUserObj = Object.fromEntries(userMap);
console.log('12 ', newUserObj);

//1. У карт на відміну від об'єктів ключі можуть бути будь-чим (масиви, об'єкти, функції)
//В об'єктів - лише строками

//2. У карт порядок властивостей завжди такий, як ми добавляємо
//В об'єктах немає чіткого порядку

//3.При створенні пустої карти у ній нічого не буде утримуватись, 
//в тому числі наслідуваних властивостей через прототип
//В об'єкті будуть наслідувані властивості (урок про Symbol)

//4. Карти легко перебирати, способи вище

//5. Розмір карти легко отримати через властивість size
//В об'єкті спочатку необхідно його трансформувати в масив (Object.keys())
