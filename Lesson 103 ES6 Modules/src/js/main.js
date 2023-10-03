export let one = 1;

let two = 2;

//другий варіант експортування
export {two};

export default function sayHi() { //default якщо потрібно експортувати по замовчуванню МОЖЕ БУТИ ЛИШЕ ОДИН
  console.log('Hello');
}

