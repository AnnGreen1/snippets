/**
 * @description 将RGB颜色转换为十六进制
 * @param {*} r 
 * @param {*} g 
 * @param {*} b 
 * @returns 
 */
const rgbToHex = (r, g, b) =>
  "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
rgbToHex(255, 255, 255); // '#ffffff'
