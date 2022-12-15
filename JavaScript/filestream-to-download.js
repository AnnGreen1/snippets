/**
 * 前端文件流下载文件，以下载excel文件为例
 * @param {fileStream} file 
 */
function downloadfile(file) {
  const url = window.URL.createObjectURL(file);
  const link = document.createElement("a");
  link.style.display = "none";
  link.href = url;
  link.setAttribute("download", "fileName.xlsx");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
