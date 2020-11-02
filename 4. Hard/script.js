//Hard
// take in user input, this is a string for now
var number1 = prompt("first num plz");
var number2 = prompt("second num plz");
var operation = prompt("Operations");

//parse string into number
var parseNumber1 = parseInt(number1)
var parseNumber2 = parseInt(number2)
console.log(typeof number1);
function calc(number1, operation, number2){

    if (operation === "+"){
    var sum = add(number1,number2);
    console.log(sum);
    return sum;
    }

if (operation === "-"){
var sum = multiply(number1,number2);
    console.log(sum);
    return sum;
}

if (operation === "*"){
var sum = divide(number1,number2);
    console.log(sum);
    return sum;
}

if (operation === "/"){
var sum = subtract(number1,number2);
    console.log(sum);
    return sum;
}

    }

function add(number1,number2){
return number1 + number2;
}

function subtract(number1, number2){
    return number1 - number2;
}
function multiply(number1,number2){
    return number1 * number2;
    }
    
    function dvide(number1, number2){
        return number1 / number2;
    }
calc(parseNumber1, operation, parseNumber2)