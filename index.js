let currentVal = "";
document.querySelector("#inputfield").value = currentVal;

document.querySelector(".btn1").addEventListener("click", function () {
  currentVal = currentVal + "1";
  document.querySelector("#inputfield").value = currentVal;
});

document.querySelector(".btn2").addEventListener("click", function () {
  currentVal = currentVal + "2";
  document.querySelector("#inputfield").value = currentVal;
});

document.querySelector(".btn3").addEventListener("click", function () {
  currentVal = currentVal + "3";
  document.querySelector("#inputfield").value = currentVal;
});

document.querySelector(".btnplus").addEventListener("click", function () {
  currentVal = currentVal + "+";
  document.querySelector("#inputfield").value = currentVal;
});

document.querySelector(".btn4").addEventListener("click", function () {
  currentVal = currentVal + "4";
  document.querySelector("#inputfield").value = currentVal;
});

document.querySelector(".btn5").addEventListener("click", function () {
  currentVal = currentVal + "5";
  document.querySelector("#inputfield").value = currentVal;
});

document.querySelector(".btn6").addEventListener("click", function () {
  currentVal = currentVal + "6";
  document.querySelector("#inputfield").value = currentVal;
});

document.querySelector(".btnminus").addEventListener("click", function () {
  currentVal = currentVal + "-";
  document.querySelector("#inputfield").value = currentVal;
});

document.querySelector(".btn7").addEventListener("click", function () {
  currentVal = currentVal + "7";
  document.querySelector("#inputfield").value = currentVal;
});

document.querySelector(".btn8").addEventListener("click", function () {
  currentVal = currentVal + "8";
  document.querySelector("#inputfield").value = currentVal;
});

document.querySelector(".btn9").addEventListener("click", function () {
  currentVal = currentVal + "9";
  document.querySelector("#inputfield").value = currentVal;
});

document.querySelector(".btndivide").addEventListener("click", function () {
  currentVal = currentVal + "/";
  document.querySelector("#inputfield").value = currentVal;
});

document.querySelector(".default-state").addEventListener("click", function () {
  currentVal = " ";
  document.querySelector("#inputfield").value = currentVal;
});

document.querySelector(".btnzero").addEventListener("click", function () {
  currentVal = currentVal + "0";
  document.querySelector("#inputfield").value = currentVal;
});

document.querySelector(".calc-total").addEventListener("click", function () {
  currentVal = executeOperation(currentVal);
  document.querySelector("#inputfield").value = currentVal;
});

document.querySelector(".btnmultiply").addEventListener("click", function () {
  currentVal = currentVal + "*";
  document.querySelector("#inputfield").value = currentVal;
});

document.querySelector(".btnmodulo").addEventListener("click", function () {
  currentVal = currentVal + "%";
  document.querySelector("#inputfield").value = currentVal;
});

document.querySelector(".btndot").addEventListener("click", function () {
  currentVal = currentVal + ".";
  document.querySelector("#inputfield").value = currentVal;
});

document
  .querySelector(".calc-backspace")
  .addEventListener("click", function () {
    if (currentVal > 0) {
      currentVal = currentVal.substring(0, currentVal.length - 1);
      document.querySelector("#inputfield").value = currentVal;
    }
  });

const operatorToFunction = {
  "+": (num1, num2) => +num1 + +num2,
  "-": (num1, num2) => +num1 - +num2,
  "*": (num1, num2) => +num1 * +num2,
  "/": (num1, num2) => +num1 / +num2,
  "%": (num1, num2) => +num1 % +num2,
};

const findOperator = (str) => {
  const [operator] = str
    .split("")
    .filter((ch) => ["+", "-", "*", "/", "%"].includes(ch));
  return operator;
};

const executeOperation = (str) => {
  const operationStr = str.replace(/[ ]/g, "");
  const operator = findOperator(operationStr);
  const [num1, num2] = operationStr.split(operator);
  return operatorToFunction[operator](num1, num2);
};
