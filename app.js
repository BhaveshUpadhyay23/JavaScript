// Datatype
console.log("------------------DATAYPE------------------");
let myName = "Bhavesh";
console.log(myName);

let num = 57252512165165721562176527186252176712;
console.log(num);
console.log(typeof num);

let bigNum = 47722838828238774287289666666746674674797289727865n;
console.log(bigNum);
console.log(typeof bigNum);

let newData = null;
console.log(newData);
console.log(typeof newData);

// Conversion
console.log("------------------CONVERSION OF DATATYPE------------------");
console.log("------------------String to Number------------------");
let newNum = "10";
console.log(typeof newNum);
console.log(typeof +newNum); //Add + before variable;
console.log(typeof Number(newNum)); //Add Number variable;
console.log("------------------Number to String------------------");
let newStr = 100
console.log(typeof newStr);
console.log(typeof (newStr + "")); //Add + "" After variable;
console.log(typeof String(newStr)); //Add Number variable;

console.log("------------------TRUTHY & FALSY------------------");
var check = null; // Falsy
var check = "Bhavesh"; // Truthy
if(check){
    console.log("Truthy");
}else{
    console.log("Falsy")
}
