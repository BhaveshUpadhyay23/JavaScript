// Calculator

function calculator(num1, num2, operator){
    if(operator == "+"){
        console.log(`Addition of ${+num1} and ${+num2} is ${+num1+ +num2}`);
    } 
    else if(operator == "-"){
        console.log(`Difference of ${+num1} and ${+num2} is ${+num1- +num2}`);
    }
    else if(operator == "*"){
        console.log(`Product of ${+num1} and ${+num2} is ${+num1* +num2}`);
    }
    else if(operator == "/"){
        console.log(`Division of ${+num1} and ${+num2} is ${+num1/ +num2}`);
    }
    else{
        console.log("Invalid Input");
        
    }
}
calculator(prompt("Enter 1st Number"),
            prompt("Enter 2nd Number"),
            prompt("Type Operator + - * /")
        );