let displayString;
let inputString;
let operator, a , b;
let display = document.getElementById('output');


// targeting all buttons 
const container = document.getElementById('main-container')
container.addEventListener('click', buttons);

function buttons(e) {
  element = e.target.value
  inputHandler(element)
}

// loading in all button presses and thier values
function inputHandler(element) {
  
  if(element !== 'DEL' 
      && element !== 'AC'
      && element !== '*'
      && element !== '='
      && element !== '+'
      && element !== '-'
      && element !== '/') {
      display.value += element;
      } 
      
  if(element === '+'
     || element === '/'
     || element === '-'
     || element === '*') {
        a = parseInt(display.value);
        operator = element;
        display.value = '';
      }

    

  if(element === 'AC'){clearAll()}
  if(element === 'DEL') {console.log(backSpace())}

  if (element === '='){    
    console.log(operate(a, parseInt(display.value), operator));   
  }

}



//Clearing all content
function clearAll() {
  display.value = '';
}

//Deleing last character in calculator
function backSpace() {
  display.value = display.value.substr(0 , display.value.length -1 )
}

// Updating the display with different restrictions
function updateDisplay(result) {
  
  if (result !== NaN && result !== undefined){
    return display.value = result;
  }
  
}





 //Calculating basic math functions here
function add(num1, num2) {return num1 + num2;}
function subtract(num1, num2) {return num1 - num2;}
function divide(num1, num2) {return num1 / num2;}
function multiply(num1, num2) {return num1 * num2;}


// Calculating values here
function operate(num1, num2, operator) {
  let result;


  switch (operator) {
    case '+':
     result = add(num1, num2);
     break;
    case '-':
     result = subtract(num1 , num2);
     break
    case '/':
     if(num2 != 0) {
     result = divide(num1 , num2);
     } else {
       result = 'Error'
       result = ''
     }
     break;
    case '*':
     result = multiply(num1 , num2);
     break;
    
    
  }

    
   return console.log(updateDisplay(result)) 
}








