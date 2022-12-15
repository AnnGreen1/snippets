function Func() {
  if (a === b) {
    console.log("x");
  } else {
    console.log("y");
  }
}
// replace with
function Func() {
  if (a === b) {
    Func = function () {
      console.log("x");
    };
  } else {
    Func = function () {
      console.log("y");
    };
  }
  return Func();
}
