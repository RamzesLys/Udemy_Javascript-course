// 1) У вас есть небольшой массив с данными о доходах каждой торговой точки. 
// Напишите функцию getPositiveIncomeAmount, которая принимает этот массив данных 
// и возвращает сумму только положительных значений из каждого объекта. (число)



const funds = [
  {amount: -1400},
  {amount: 2400},
  {amount: -1000},
  {amount: 500},
  {amount: 10400},
  {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
  return data.filter(item => item.amount >= 0).reduce((sum, curr) => sum + curr.amount, 0)
};

console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
  return data.some(item => item.amount < 0) ? data.reduce((sum, curr) => sum + curr.amount, 0) : getPositiveIncomeAmount(data);
};

console.log(getTotalIncomeAmount(funds));