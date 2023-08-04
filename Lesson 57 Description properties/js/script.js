'use strict'

const user = {
  name: 'Alex',
  surname: 'Smith',
  showMyPublicData: function() {
    console.log(`${this.name} ${this.surname}`);
  }
}

// Object.defineProperty(user, 'birthday', {value: prompt('Date?'), enumerable: true, configurable: true})

// console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));

Object.defineProperty(user, 'showMyPublicData', {enumerable: false})
//тепер showMyPublicData не попадає в перебір

for (let key in user) {
  console.log(key);
}


// Object.defineProperty(user, 'birthday', {writable: false})
//writable:false не дозволяє перезапис даних

// console.log(Object.getOwnPropertyDescriptor(user, 'name'));

// Object.defineProperty(user, 'name', {writable: false});

//user.name = 'ssdfdsf' //помилка, тепер можемо лише читати, а не змінювати

// Object.defineProperty(user, 'gender', {value: 'male'});

// console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

//writable
//enumerable
//configurable