// Calculator
// Syntax 1
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
// calculator(prompt("Enter 1st Number"),
//             prompt("Enter 2nd Number"),
//             prompt("Type Operator + - * /")
//         );

// Syntax 2
function caclu(n1,n2,oper){
    switch (oper){
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "*":
            return n1*n2;
        case "/":
            if(n2 == 0){
                return "Cannot divide by zero";
            }else{
            return n1/n2;
            }
        default:
            return "invalid";
    }
}

// console.log(caclu(24,0,"/"));

// Reverse a string

let isReverse = (str) => {
    let reverseStr = ""
    for(let i=str.length-1; i>=0; i--){
        reverseStr = reverseStr + str[i];
    }
    return reverseStr;
}

console.log(isReverse("WEB DEVELOPMENT"));

// Palindrome 

let palindrome = (str)=>{
    let newStr = ""
    for(i=str.length-1; i>=0; i--){
        newStr = newStr + str[i];
    }
    // return str == newStr ? true : false
    
    if (newStr.toLowerCase() == str.toLowerCase()){
        console.log(`YES ${str} is a palindrome`);
    }else{
        console.log(`${str} is not a palindrome`);
    }
}
palindrome("level");
palindrome("javascript");
palindrome("Noon");