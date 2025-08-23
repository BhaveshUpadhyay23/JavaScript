/*
---------While loop---------

    while (condition){
        // Code
    }

*/

let num = 1;
while(num<=10){
    console.log(num);
    num++;
}

/*
---------Do-While loop---------
    do{
        // Code to be executed atleast once
    } while (condition);

*/

let i = 1;
do{
    console.log(i);
    i++;
}while(i<=10);

/*
---------For loop---------
    for{initializer; condition; iteration}{
        // COde
    }

*/

for(let j=1; j<=10; j++){
    console.log(j)
}

//-----Problems-----
// Table of 5
for(let val=1; val<=10; val++){
    console.log(`5 X ${val} = ${val*5}`)
}

let val2 = 1;
while(val2<=10){
    console.log(`7 X ${val2} = ${val2*7}`);
    val2++;
}

// Use of do-while
// let positiveNum;
// do{
//     positiveNum = prompt("ENTER ANY POSITIVE NUMBER");
// }while((isNaN(positiveNum)) || (positiveNum < 0));
// console.log(positiveNum);

// // Sum of N natural numbers

// let sum = 0;
// let lastNum = prompt("Enter Last Number");
// for(let i=1; i<=lastNum; i++){
//     sum = sum+i;
// }
// console.log(`Sum of N natural number is: ${sum}`);

// Prime Number
// let digit = prompt("ENTER ANY NUMBER TO CHECK IF ITS A PRIME NUMBER OR NOT");
let digit = 100;
for(let i=2; i<digit; i++){
    if(digit%i == 0){
        console.log(`${digit} is NOT a prime number`);
        console.log(i);
        break;
    } else{
        console.log(digit, "is a PRIME number")
        break;
    }
}


// Leap Year
let year = 2020;
// Method 1
if (year%4 == 0){
    if(year%100 != 0){
        console.log(`${year} is a leap year`);
    }else{
        console.log(`${year} is NOT a leap year`);
    }
}
else if(year%400 == 0){
console.log(`${year} is NOT a leap year`);
}
else{
console.log(`${year} is NOT a leap year`);
}

// Method 2
if(year%4 == 0 && year%100 != 0 || year%400 == 0){
    console.log(`${year} is a leap year`);
}
