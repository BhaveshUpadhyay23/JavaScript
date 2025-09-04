let citizen_1 = {
    greet: function(){
        console.log("Hello, World!")
    },
    name: "Bhavesh",
    age: 19,
    nationality: "Indian",
} 

console.log(citizen_1);

// Accessing Properties
console.log(citizen_1.name);

// Adding and modifying
citizen_1.name = "Bhavesh Upadhyay";
citizen_1.job = "Engineer";
console.log(citizen_1);

// Methods
citizen_1.greet();

// Dynamic Key
let id2 = "myId2";

let dynamicId = {
    id1: "A123",
    [id2]: "B123", //Dynamic
    message: function(){
        console.log(`Your id1 is ${dynamicId.id1}`);
        console.log(`Your id2 is ${dynamicId.id2}`); // undefined
        console.log(`Your id2 is ${dynamicId[id2]}`);
    }

}
dynamicId.message();

// Pass by reference
let data_1 = {
    id: 123,
}

let data_2 = data_1;
console.log("Before Modification");

console.log("Data 1",data_1);
console.log("Data 2",data_2);

data_2.id = "ABC";
console.log("After Modification");
console.log("Data 1",data_1);
console.log("Data 2",data_2);

// If we do not want to modify data in data_1 object
let data_A = {
    id: 1001,
}

let data_B = Object.assign({}, data_A);
console.log("Before Modification");
console.log("Data A",data_A);
console.log("Data B",data_B);

data_B.country = "India";
console.log("After Modification");
console.log("Data A",data_A);
console.log("Data B",data_B);
