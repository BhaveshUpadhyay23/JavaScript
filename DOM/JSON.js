// Methods

/*
    JSON.stringify
        Converts a JS object into JSON string
    
    JSON.parse
        Converts a JSON string into a JS object
*/

// Problem 1
// Save data to localStorage

let studentData = {
    id: 1234,
    age: 19,
    program: "B.Tech",
}

window.localStorage.setItem("studentData", JSON.stringify(studentData));
window.localStorage.getItem("studentData");


// Point to Remeber
console.log(typeof(JSON.parse(window.localStorage.getItem("studentData")))); //Object
console.log(typeof(window.localStorage.getItem("studentData"))); // String
