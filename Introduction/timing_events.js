let codeBlock_1 = function(){
    console.log("Welcome");
}

setTimeout(codeBlock_1, 2000)
// Execute a function or code block after a specified time


let codeBlock_2 = function(){
    console.log("Hello, World");
}
const greet = setInterval(codeBlock_2, 3000)
// repeatedly execute a function or code block at a specified interval (in ms)

setTimeout(()=>{
    clearInterval(greet);
}, 7000);