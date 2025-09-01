// if else
console.log("------------------if else------------------")
let marks = 90;
if(marks >= 95){
    console.log("Grade: o");
    }else if(marks >= 90){
        console.log("Grade: A");
        }else if(marks >= 80){
            console.log("Grade: B")
            }else if(marks >= 70){
                console.log("Grade: C")
                }else if(marks >= 60){
                    console.log("Grade: D")
                    }else if(marks >= 50){
                        console.log("Grade: E")
                        }else{
                            console.log("Grade: F")
                        }

let age = prompt("Your Age");
if(age >= 18){
    let nation = prompt("Enter Your Nationality");
    if(nation == "Indian"){
        let voterCard = prompt("Do you have Voter Card (Y/N)");
        if(voterCard == "Y"){
            console.log("Yes! Your are eligible to vote.");
        }else{
            console.log("Not Eliglible, Apply for voter card");
        }
    }else{
        console.log("Not an Indian citizen");
    }
}else{
    console.log("Underage");
}

isCitizen = false;
if(isCitizen){
    console.log("True");
}else{
    console.log("False")
}

// Switch
console.log("------------------Switch------------------")

let day = 4;
switch(day){
    case 1 : console.log("Monday");
    break
    case 2 : console.log("Tuesday");
    break
    case 3 : console.log("Wednesday");
    break
    case 4 : console.log("Thrusday");
    break
    case 5 : console.log("Friday");
    break
    case 6 : console.log("Saturday");
    break
    case 7 : console.log("Sunday");
    break
    default : console.log("Invalid");
}

let areaOfShape = prompt("Enter Shape");
switch(areaOfShape){
    case "Rectangle":
        let a = prompt("Enter Length");
        let b = prompt("Enter Width");
        console.log(`Area of given rectangle is ${a*b}`);
        break
    
        case "Circle":
            let r = prompt("Enter Radius");
            console.log(`Area of given circle is ${3.14*r*r}`);
            break
        
        case "Square":
            let s = prompt("Enter Side");
            console.log(`Area of square if ${s**2}`);
            break
        default : console.log("Shape Not Available");
}

