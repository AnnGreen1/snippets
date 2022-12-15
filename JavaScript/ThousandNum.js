const ThousandNum = (num) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const money = ThousandNum(1000000); // money => '1,000,000'
console.log(money);