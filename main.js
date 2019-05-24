
let number = 4;
let number2 = 4;


function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

// Calculating values here
function operate(num1, num2, operator) {
  let a = num1;
  let b = num2;

  switch (operator) {
    case '+':
      return console.log(add(a, b));
    case '-':
      return console.log(subtract(a , b));
    case '/': 
      return console.log(divide(a , b));
    case '*':
      return console.log(multiply(a , b));
    
  }

 
    
}

  console.log(operate(number, number2, '*'));
  


