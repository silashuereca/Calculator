let operator;
let a;
let b;
let display = document.getElementById('output');
let inputString;



// targeting all buttons 
const container = document.getElementById('main-container')
container.addEventListener('click', buttons);
function buttons(e) {
  element = e.target.value;
 
  inputHandler(element)
}


// loading in all button presses and thier values
function inputHandler(element) {
  

  if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].indexOf(element) !== -1) {
    a = display.value += element;
  } 
  
  if(['/', '*', '+', '-'].indexOf(element) !== -1){
    operator = element;
    b = display.value
    display.value = '';
  
    
  } 
  
  if(element === '.'){
    if(!display.value.includes('.')){
      display.value += element;
    }
  } 
  
  if(element == '=') {
    if(display.value !== ''){
      
      console.log(a, b, operator)
      operate(parseFloat(b), parseFloat(a), operator)
      
    } 
  }

  if(element == 'AC'){return clearAll()};
  if(element == 'DEL'){return backSpace()}
 

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
 
  return display.value = result;
  
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
     }
     break;
    case '*':
     result = multiply(num1 , num2);
     break;
    
    
  }

    
   return console.log(updateDisplay(result)) 
}








