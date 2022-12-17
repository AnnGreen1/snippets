/**
 * @description 将字符串转换为camelCase
 * @param {*} str 
 * @returns 
 */
const toCamelCase = (str) =>
  str.trim().replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""));
toCamelCase("background-color"); // backgroundColor
toCamelCase('-webkit-scrollbar-thumb'); // WebkitScrollbarThumb
toCamelCase('_hello_world'); // HelloWorld
toCamelCase('hello_world'); // helloWorld
