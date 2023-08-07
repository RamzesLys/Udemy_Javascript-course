'use strict'

const user = {
  name: 'Alex',
  surname: 'Smith',
  birthday: '20/04/2021',
  showMyPublicData: function() {
    console.log(`${this.name} ${this.surname}`);
  }
}

for (const key in user) {
  console.log('1 ', user[key]);

}
// for (const key of user) {
//   console.log('1A ', user[key]);
// }

const arr = ['b', 'a', 'c'];
Array.prototype.someMethod = function() {

};

console.dir(arr)

for (const key in arr) {
  console.log('2 ', key);
}

for (const key of arr) {
  console.log('3 ', key);
}

const str = 'string';
for (const key in str) {
  console.log('4 ', str[key]);
}

const salaries = {
  John: 500,
  Ivan: 1000,
  Ann: 5000,
  sayHello: function () {
    console.log('5 Hello');
  }
}

salaries[Symbol.iterator] = function() {
  return {
    current: this.John,
    last: this.Ann,
    next() {
      if (this.current < this.last) {
        this.current = this.current + 500;
        return {done: false, value: this.current}
      } else {
        return  {done: true}
      }
     
    }
  }
}