const someString = 'This is some strange string';

function reverse(str) {
  if (typeof(str) !== 'string') {
    return "Ошибка!";
}
  return str.split('').reverse().join('')
}


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
  let str = '';
  arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

  arr.forEach((curr, i) => {
    if (curr !== missingCurr) {
      str += `${curr}\n`;
    }
  });
  return str;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies]));
