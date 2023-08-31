const log = function(a, b, ...rest) { //...rest - опціональні значення
  console.log(a, b, rest);
}

log('basic', 'rest', 'operator', 'usage');

function calcOrDouble(number, basis = 2) {//якщо при виклику функції немає другого аргументу (basis), то значення по замовчуванню - 2
  //basis = basis || 2; // старий метод
  console.log(number * basis);
}

calcOrDouble(3);//якщо відсутній другий аргумент (basis) то підставляється значення "2"