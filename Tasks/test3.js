//1
function setOptions(height, width, ...additional) {
  console.log(height, width, ...additional)
}
setOptions(400, 500, 'red', 'top');

//2
function getSum(a, b) {
  function sum() {
      console.log(this.a);
      return a + b;
  }
  console.log(sum());
}

getSum(4, 5);

//3
const urlObj = {
  protocol: 'https',
  domain: 'mysite.com'
}

function showCurrentURL() {
  const extractCurrDomain = () => {
      return this.domain;
  }
  const extractCurrProtocol = () => {
      return this.protocol;
  }
  console.log(`${extractCurrProtocol()}://${extractCurrDomain()}`)
}

const url = showCurrentURL.bind(urlObj);

console.log(url);