function editor(){
    editorName = "VSC"
    console.log(this.editorName)
}
editor();

const obj = {
    language: "JavaScript",
    use: "Frontend",
    data: function(){
        return this.language;
    }
}
console.log(obj.data());

// Methods

const product = {
    item: "Laptop",
    Brand: "Lenovo",
    RAM: 8
}
// Accessing Keys
console.log(Object.keys(product));
//Returns array of Keys

// Accessing Values
console.log(Object.values(product));
//Returns array of Values

// Accessing Entries
console.log(Object.entries(product));
//Returns array of array of Key-Value Pair/Entries

// Accessing hasOwnProperty
console.log(product.hasOwnProperty("item"));
console.log(product.hasOwnProperty("id"));
// returns boolean value





