/**
 * 以O(n log n)的复杂度对一个数组进行就地洗牌
 * @param {Array} arr 
 * @returns Array
 */
const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5)
// 测试
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(shuffleArray(arr))