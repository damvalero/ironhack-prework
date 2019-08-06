//ARRAYS 

let total=0;
const numbers=[2,3,6,1,7,10];

for ( var i = 0; i< numbers.length; i++){
  total+=numbers[i];
}
console.log(total);

let average = (total/numbers.length);
console.log(average);

let list=[10, 16, 99, 0, 52, 41, 7];
let currentLargest=list[0];

for (let a=0; a<list.length; a++){
  if(currentLargest<list[a]){
    currentLargest=list[a];
  }
}   
console.log(currentLargest);


//FUNCTIONS
//1st exercise

function calculateSum(numOne, numTwo){
    return numOne + numTwo;
}

function printResult(){
    const result =calculateSum(5,7);
    console.log('The result is ' + result + '.');
}

printResult();

function multiplyNumbers(num1, num2){
    return num1 * num2;
}

function printMultiplication(){
    const result =multiplyNumbers(3,6);
    console.log('The result is ' + result + '.');
}

printMultiplication();

//2nd exercise
function addNUmbers(numOne, numTwo){
    return numOne + numTwo;
}

function subtractNUmbers(numOne, numTwo){
    return numOne - numTwo;
}

function multiplyNUmbers(numOne, numTwo){
    return numOne * numTwo;
}

function divideNUmbers(numOne, numTwo){
    return numOne / numTwo;
}
const process =['addition', 'subtraction', 'multiplication', 'division'];
function calculator(numOne, numTwo, operation){    
    if (operation=== process[0]){
        return addNUmbers(numOne, numTwo);
    }else if(operation === process[1]){
        return subtractNUmbers(numOne, numTwo);
    }else if(operation=== process[2]){
        return multiplyNUmbers(numOne, numTwo);
    }else if (operation=== 'division'){
        return divideNUmbers(numOne, numTwo);
    }
}
const result = calculator(4, 3,process[3]);//calculator(4,3,'addition');
console.log('The result is: ' + result);

