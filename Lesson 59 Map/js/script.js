'use strict'

// const user = {
//   name: 'Alex',
//   surname: 'Smith',
//   birthday: '20/04/2021',
//   showMyPublicData: function() {
//     console.log(`${this.name} ${this.surname}`);
//   }
// }

// console.log(user);

// console.log(typeof(Object.keys(user)[0]));

const shops = [
  {rice: 500},
  {oil: 200},
  {bread: 50}
];

const budget = [5000, 15000, 25000];

const map = new Map([
  [{paper: 400}, 8000]
]);

shops.forEach((shop, i) => {
  map.set(shop, budget[i])
})

// map.set(shops[0], 5000);
// map.set(shops[1], 3000);
// map.set(shops[2], 7000);

// console.log(map);
// console.log(map.get(shops[0]));

// console.log(map.has(shops[2]));

// map.delete();
// map.clear();
// map.size

// map.keys()
const goods = [];

for(let shop of map.keys()) {
 goods.push(Object.keys(shop)[0]);

}
console.log(goods);