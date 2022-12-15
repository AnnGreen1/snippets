/**
 * 1、能否确定一个url里一定是一个 ？
 */


/**
 * 
 * @param {*} url 
 */
function _getParamsII(url) {
  const params = new URLSearchParams(url.split('?')[1].replace(/\?/gi, ""));
  // location.search = "?name=test&sex=man"
  console.log(params);
  params.has("test"); // true
  params.get("sex"); //"man"
}

const _getParams = (url) => {
  // 补全代码
  let arr = url.match(/(\w+)=(\w+)/gi);
  let obj = {};
  arr.map((item) => {
    let [key, value] = item.split("=");
    obj[key] = value;
  });
  return obj;
};

let url =
  "https://www.nowcoder.com/practice/9a4cca8c0779438a8be39d45d0370597?tpId=271&tqId=39554&rp=1&ru=/exam/oj&qru=/exam/oj&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3DJS%25E7%25AF%2587%26topicId%3D271&difficulty=undefined&judgeStatus=undefined&tags=&title=";

console.log(_getParamsII(url));
console.log(_getParams(url));
