function Func() {
  console.log("x");
  Func = function () {
    console.log("y");
  };
}
Func() // x
Func() // y