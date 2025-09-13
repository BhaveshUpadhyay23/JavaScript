// Callback function (Passing as an argument in another function)
function greetUser(name){
    console.log(`Hello ${name}`);
}

function userInput(name, greetUser){
    console.log("Recevied input: " +name);
    greetUser(name);
}

// Higher Order Function (Calling Other Function)
userInput("Bhavesh", greetUser);
 

// Problem

const mathOp = (a, b, operation) => {
    return operation(a,b);
}

const add = (a,b) => {
    return a+b;
}

const sub = (a,b) => {
    return a-b;
}


console.log(mathOp(10, 20, add));
console.log(mathOp(10, 20, sub));