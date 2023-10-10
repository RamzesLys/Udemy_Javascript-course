'use strict';

const data = [
  {
    id: 'box',
    tag: 'div'
  },
  {
    id: 'nav',
    tag: 'nav'
  },
  {
    id: 'circle',
    tag: ''
  }
]

try {
  data.forEach((blockObj, i ) => {
    const block = document.createElement(blockObj.tag);
  
    if (!blockObj.id) throw new SyntaxError(`В даних під номером ${i + 1} відсутній id`);
    block.setAttribute('id', blockObj.id);
    document.body.append(block);
  }) 
  
} catch (e) {
  if(e.name === "SyntaxError") {
    console.log(e.message);
  } else throw e;


}

// const err = new SyntaxError ('помилка');
// console.log(err.name, err.message, err.stack);