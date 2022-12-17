/**
 * @description 一种避免XSS的方法，转义HTML特殊字符
 * @param {HTML标签字符串} str 
 * @returns 
 */
const escape = (str) =>
  str.replace(
    /[&<>"']/g,
    (m) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[
        m
      ])
  );
console.log(escape("<div >Hi Medium.</div>"));; // &lt;div class=&quot;medium&quot;&gt;Hi Medium.&lt;/div&gt
