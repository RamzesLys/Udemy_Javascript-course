'use strict';

//аргументи обов'язково у подвійних кавичках
const persone = {
  name: 'Alex',
  tel: '+380932945632',
  parents: {
    mom: 'Olga',
    dad: 'Mike'
  }
};

console.log(1, JSON.stringify(persone));//для відправки на сервер

console.log(2, JSON.parse(JSON.stringify(persone)));

const clone = JSON.parse(JSON.stringify(persone));

clone.parents.mom = 'Ann';

console.log(3, persone);

console.log(4, clone);