let languages = ["Python", "JavaScript", "Java", "C++", "C#", "Go", "Ruby", "Swift", "Rust", "TypeScript"];

// Accessing Elements
console.log(languages[0]);

// Modify
console.log(languages[5] = "C");

// Iteration
// for of
for(let items of languages){
    console.log(items);
}

// for in
for(let item in languages){
    console.log(item);
}

//forEach
languages.forEach((curEle, index, arr) => {
    console.log(`${curEle}, ${index}`)
})
/*
    similar to map but Will not return any value
*/

//Map
languages.map((curEle, index, arr)=>{
    console.log(`${curEle}, ${index}`)
});
/*
    Creates a new array
*/

console.log(...languages);
