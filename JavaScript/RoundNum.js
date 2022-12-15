const RoundNum = (num, decimal) =>
  Math.round(num * 10 ** decimal) / 10 ** decimal;
const num = RoundNum(1.2345, 2); // num => 1.23
console.log(num);