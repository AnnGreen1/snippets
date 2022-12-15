function DataType(tgt, type) {
  const dataType = Object.prototype.toString
    .call(tgt)
    .replace(/\[object (\w+)\]/, "$1")
    .toLowerCase();
  return type ? dataType === type : dataType;
}
DataType("test"); // "string"
DataType(20220314); // "number"
DataType(true); // "boolean"
DataType([], "array"); // true
DataType({}, "array"); // false
