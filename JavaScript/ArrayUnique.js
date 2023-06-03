/**
 * 数组去重
 * @param {Array} arr 
 * @returns Array
 */
const getUnique = (arr) => [...new Set(arr)]


const getUnique2 = (arr) => Array.from(new Set(arr))

const getUnique3 = (arr) => {
    let newarr = [];
    arr.forEach((item) => {
        if(!newarr.includes(item)) newarr.push(item)
    })
    arr = newarr;
    return arr;
}

const getUnique4 = (arr) => {
    let newarr = [];
    arr.forEach((item) => {
        if(newarr.indexOf(item) === -1) newarr.push(item)
    })
    arr = newarr;
    return arr;
}
// 测试
const arr = [1, 1, 2, 3, 3, 4, 4, 5, 5];
console.log(getUnique(arr))
console.log(getUnique2(arr))
console.log(getUnique3(arr))
console.log(getUnique4(arr))