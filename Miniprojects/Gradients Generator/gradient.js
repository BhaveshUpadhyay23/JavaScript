let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let cssCode = document.querySelector(".csscode");
let ranHexFor1 = "#AC214E";
let ranHexFor2 = "#932CA8"

const hexCodeGen = () => {
    let hexa = "0123456789ABCDEF"
    let hexCode = "#";
    for(let i=1; i<=6; i++){
        let randomNum = Math.floor(Math.random()*16);
        hexCode += hexa[randomNum];
    }
    return hexCode;
}
const handleBtn1 = (handleBtn2) => {
    ranHexFor1 = hexCodeGen()
    btn1.textContent = ranHexFor1;
    document.body.style.backgroundImage = `linear-gradient(to right, ${ranHexFor1}, ${ranHexFor2})`;
    cssCode.innerHTML = `linear-gradient(to right, ${ranHexFor1}, ${ranHexFor2})`;
    return ranHexFor1;
}

const handleBtn2 = (handleBtn1) => {
    ranHexFor2 = hexCodeGen()
    btn2.textContent = ranHexFor2;
    document.body.style.backgroundImage = `linear-gradient(to right, ${ranHexFor1}, ${ranHexFor2})`;
    cssCode.innerHTML = `linear-gradient(to right, ${ranHexFor1}, ${ranHexFor2})`;
    return ranHexFor2;
}

cssCode.addEventListener('click',()=>{
    navigator.clipboard.writeText("background-image: " + cssCode.innerText);
    alert("Text Copied");
})
// Event Listeners
btn1.addEventListener("click",handleBtn1)
btn2.addEventListener("click",handleBtn2)