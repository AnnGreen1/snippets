const RandomId = (len) => Math.random().toString(36).substr(3, len);
const id = RandomId(10); // id => "xdeguewg1f"
console.log(id);