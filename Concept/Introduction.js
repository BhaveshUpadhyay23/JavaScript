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

// parseInt & parseFloat
console.log("------------------parseInt & parseFloat------------------");
// Converts Sting to integer or float 
let myStr = "23.5";
console.log(parseInt(myStr)); // Output: 23
console.log(parseFloat(myStr)); // Output: 23.5
let myStr2 = "23B.6";
console.log(parseInt(myStr2)); // Output: 23
let myStr3 = "0006";
console.log(parseInt(myStr3)); // Output: 6
let myStr4 = "-23";
console.log(parseInt(myStr4)); // Output: -23
let myStr5 = "abc";
console.log(parseInt(myStr5)); // Output NaN
let myStr6 = "&23";
console.log(parseInt(myStr6)); // Output NaN

console.log(false-false); // 0
console.log(false-true); // -1
console.log(true-false); // 1
console.log(true-true); // 0

// Expressions & Operators
console.log("------------------Expressions & Operators------------------");
console.log(false-false); // 0
console.log(false-true); // -1
console.log(true-false); // 1
console.log(true-true); // 0
console.log(2>3 || 3==3); // Both must be true
console.log(2<3 && 3!=3); // Both must be true
console.log(2>3 && 3==3); // one must be true
console.log(3==3 && 3==3); // Both must be true