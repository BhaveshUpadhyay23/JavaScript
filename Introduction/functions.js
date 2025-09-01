// Functions

/*
Block of reuseable code

function <function-name>(parameters){
    Code
}

function-name(arguments);
*/

function sum(a,b){
    console.log(`sum: ${a+b}`);
}
sum(23, 19);

function sum(a,b){
    console.log(`sum: ${+a+ +b}`);
}
// sum(prompt("Enter 1st Number"), prompt("Enter 2nd Number"));

function greet(name){
    console.log(`Hello, ${name}!`);
}

// greet(prompt("Enter Your Name"));

// Named Function Expression

let hello = function greet(){
    console.log("Hello, World")
}

hello();

// Anonymous Function
let product = function (a,b){
    console.log(`Product ${a*b}`)
}

product(2,4);


let multiply = function (a,b){
    return a*b;
}

console.log(`Product ${multiply(2,5)}`);


//IIFE: Immediately Invoked Function Expression
/*
    executed immediately after its creation or when page loads
*/

(function (){
    alert("Welcome!")
})();

(function(a,b){
    return a+b;
})(4,6);

// Default Parameters
function product(a,b=10){
    return a*b;
}
console.log(product(5)); //50
console.log(product(5,19)); //95


// Arrow Function

let sum = (a,b) => {
    console.log(a+b);
}
sum(4,5);

let diff = (a,b) => console.log(a-b);
diff(5,4);




