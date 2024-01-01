const RandomColor = () =>
  "#" +
  Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0");
const color = RandomColor(); // color => "#2cbf89"
console.log(color);


/**
 * @description: 生成在已给出的颜色之外的十六进制颜色值
 * @param {*} existingColors 
 * @returns 
 */
function generateRandomColor(existingColors) {
  var color = "#";
  var characters = "0123456789ABCDEF";

  do {
    color = "#";
    for (var i = 0; i < 6; i++) {
      color += characters[Math.floor(Math.random() * 16)];
    }
  } while (existingColors.includes(color)); // 确保生成的颜色不在现有颜色数组中

  return color;
}

// 使用示例
var existingColors = ["#FF5733", "#A832FF", "#33FF57"]; // 你的现有颜色数组
var newColor = generateRandomColor(existingColors);
console.log(newColor); // 输出新生成的不同颜色
