import {one, two} from './main.js'; // - іменований експорт 

//або
// import {one as first} from './main'; //  - екпортувати як ...

//якщо треба імпортувати все
// import * as data from './main';

import sayHi from './main.js';

console.log(`${one} and ${two}`);
// console.log(`${data.one} чи ${data.two}`);
// data.sayHi();

//якщо експортовано через default можна викликати окремо
sayHi();
