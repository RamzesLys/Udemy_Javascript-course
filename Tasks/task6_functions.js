// Место для первой задачи
function sayHello(name) {
 return 'Привет, ' + name +'!'
}


// Место для второй задачи
function returnNeighboringNumbers(num) {
  return [num - 1, num, num + 1]
}



// Место для третьей задачи
function getMathResult(number1, number2) {
  if (typeof(number2) !== 'number' || number2 <= 0) {
    return number1;
}

  let str = '';
  
  for (let i = 1; i <= number2; i ++) {
    if (i === number2) {
    str += `${number1 * i}`;
     
  } else {
    str += `${number1 * i}---`;
  }
}
return str;
}

console.log(getMathResult(7,5));


