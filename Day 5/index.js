let output = document.querySelector(".output");
let buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    console.log(e.target);
    let num1 = document.getElementById("first");
    let num2 = document.getElementById("second");
    num1 = parseInt(num1.value);
    num2 = parseInt(num2.value);
    let op = e.target.value;
    let result = 0;

    if (op == "+") {
      result = num1 + num2;
    } else if (op == "-") {
      result = num1 - num2;
    } else if (op == "*") {
      result = num1 * num2;
    } else if (op == "/") {
      result = num1 / num2;
    }
    output.innerText = `Result = ${result}`;
  })
);
