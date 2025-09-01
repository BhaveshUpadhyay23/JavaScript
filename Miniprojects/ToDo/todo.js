let delBtn = document.querySelector(".delete");
let doneBtn = document.querySelector(".done");
let addBtn = document.querySelector(".add");
let enteredTaskValu = document.querySelector(".enteredtask");

delBtn.addEventListener("click",()=>{
    console.log("Task Deleted Successfully");

})

doneBtn.addEventListener("click",()=>{
    console.log("Task Completed");
})

const enteredTask = () => {
    console.log(enteredTaskValu.value);
    let newTask = createElement("li");
    newTask.textContent = enteredTaskValu.value;
    console.log(newTask);
    enteredTaskValu.value = "";
}

addBtn.addEventListener("click",()=>{
    console.log("Task Added Successfully");
    enteredTask();

})