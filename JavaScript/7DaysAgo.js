/**
 * @description:最近七天，比如 2.8 00:00:00 - 2.14 23:59:59，返回毫秒时间戳
 * @returns
 * @param
 */

function SevenDaysAgo(){
    return [new Date(new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000).getTime() - 7*24*60*60*1000,new Date(new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1).getTime()]
}
console.log(SevenDaysAgo());


function SevenDaysAgoII(){
    const date = new Date()
    const y = date.getFullYear()
    const m = date.getMonth()
    const d = date.getDate()
    const today = new Date(y,m,d,23,59,59,999)
    // console.log(today.getTime());
    return [today.getTime()- 7*24*60*60*1000 +1, today.getTime()]
}
console.log(SevenDaysAgoII())