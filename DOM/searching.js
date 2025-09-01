// Get Element
console.log(document.getElementById("heading").innerText);

console.log(document.querySelector("#heading").innerText);

let byClass = document.getElementsByClassName("language");
for(elem of byClass){
    console.log(elem.innerText);
}
