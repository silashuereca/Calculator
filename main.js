let displayString;
let inputString;
let a , b;
let display = document.getElementById('output');


// targeting all buttons 
const container = document.getElementById('main-container')
container.addEventListener('click', buttons);

function buttons(e) {
  element = e.target.value
  operator = e.target.key
  inputHandler(element, operator)
}

// loading in all button presses
function inputHandler(element) {

 if(element !== 'DEL' 
    && element !== 'AC'
    && element !== '/') {
     console.log(display.value += element);
    } 
    
    if(operator === '/') {
      console.log(a = operator);
    }

  if(element === '=') {
    operate(a, b, operator)
  }

 if(element === 'AC'){clearAll()}
 if(element === 'DEL') {console.log(backSpace())}


 
}

//Clearing all content
function clearAll() {
  display.value = '';
}

//Deleing last character in calculator
function backSpace() {
  display.value = display.value.substr(0 , display.value.length -1 )
}

// Storing values in display
function updateDisplay(result) {
  return console.log(display.value = result)
}





 //Calculating basic math functions here
function add(num1, num2) {return num1 + num2;}
function subtract(num1, num2) {return num1 - num2;}
function divide(num1, num2) {return num1 / num2;}
function multiply(num1, num2) {return num1 * num2;}


// Calculating values here
function operate(num1, num2, operator) {
  let a = num1;
  let b = num2;
  let result;

  switch (operator) {
    case '+':
     result = add(a, b);
    case '-':
     result = subtract(a , b);
    case '/':
     if(b != 0) {
     result = divide(a , b);
     } else {
       'Error'
     }
    case '*':
     result = multiply(a , b);
    
  }

    //passing in the result to be displayed
   return console.log(updateDisplay(result)) 
}

  











