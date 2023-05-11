//var clear = document.getElementById("tbNumerals");
var num1 = document.getElementById("tbNumerals");
var operator;
var result = document.getElementById("tbResult");
function add() {
  num1.value;
  operator = "+";
  document.getElementById("tbNumerals").value = "";
}

function subtract() {
  num1.value;
  operator = "-";
  document.getElementById("tbNumerals").value = "";
}

function multiply() {
  num1.value;
  operator = "*";
  document.getElementById("tbNumerals").value = "";
}

function divide() {
  num1.value;
  operator = "/";
  document.getElementById("tbNumerals").value = "";
}

function del() {
  document.getElementById("tbNumerals").value = "";
}

function getResult() {
  var num2 = document.getElementById("tbNumerals").value;
  var res;
  if (operator === "+") {
    res = parseFloat(num1.value) + parseFloat(num2.value);
    res = result.innerHTML;
  } else if (operator === "-") {
    res = parseFloat(num1.value) + parseFloat(num2.value);
    res = result.innerHTML;
  } else if (operator === "*") {
    res = parseFloat(num1.value) + parseFloat(num2.value);
    res = result.innerHTML;
  } else if (operator === "/") {
    res = parseFloat(num1.value) + parseFloat(num2.value);
    res = result.innerHTML;
  }
}

add();
del();
getResult();
