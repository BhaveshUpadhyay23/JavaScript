const globalVar = "It is a Global Scope";

function myFunction(){
    const functionVar = "It is a function scope";

    if(true){
        const blockVar = "It is a block Variable";
        console.log(blockVar);
        console.log(globalVar);
        console.log(functionVar);
    }
    console.log(blockVar); // Output: Error
}
myFunction();