/**
 * @description 展平一个数，高维变一维
 * @param {Array} arr 
 * @returns 
 */
const flat = (arr) =>
  [].concat.apply(
    [],
    arr.map((a) => (Array.isArray(a) ? flat(a) : a))
  );
const flatII = (arr) =>
  arr.reduce((a, b) => (Array.isArray(b) ? [...a, ...flat(b)] : [...a, b]), []);

const flat3 = (arr) => arr.flat(Infinity)

const flat4 = (arr) => JSON.parse("[" + JSON.stringify(arr).replace(/\[|\]/g, "") + "]");


console.log(flat(["cat", ["lion", "tiger"]])); // ['cat', 'lion', 'tiger']
console.log(flat(["cat", ["lion", "tiger",["pig","monkey"]]]));
console.log(flatII(["cat", ["lion", "tiger"]])); // ['cat', 'lion', 'tiger']
console.log(flat3(["cat", ["lion", "tiger",["pig","monkey"]]]));
console.log(flat4(["cat", ["lion", "tiger",["pig","monkey"]]]));