/**
 * 数组去重
 * @param {Array} arr 
 * @returns Array
 */
const getUnique = (arr) => [...new Set(arr)]
// 测试
const arr = [1, 1, 2, 3, 3, 4, 4, 5, 5];
console.log(getUnique(arr))