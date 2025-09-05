let addBtn = document.querySelector(".add");
let enteredTaskValu = document.querySelector(".enteredtask");
let taskList = document.querySelector(".taskList");
let listItem = document.querySelector(".listItem");

const enteredTask = () => {
    console.log(enteredTaskValu.value);
    let newTask = document.createElement("li");
    newTask.classList.add("addedTasks");

    let newTaskContent = document.createElement("p");
    newTaskContent.textContent = enteredTaskValu.value;

    let doneBtn = document.createElement("button");
    doneBtn.innerHTML = "&#10003;";
    doneBtn.classList.add("btn");
    doneBtn.classList.add("done");

    let delBtn = document.createElement("button");
    delBtn.innerHTML = "&cross;";
    delBtn.classList.add("btn");
    delBtn.classList.add("delete");

    newTask.appendChild(doneBtn);
    newTask.appendChild(newTaskContent)
    newTask.appendChild(delBtn);

    console.log(newTask);

    taskList.appendChild(newTask);  

    console.log(taskList);
    enteredTaskValu.value = "";
}

// delBtn.addEventListener("click",()=>{
//     console.log("Task Deleted Successfully");

// })

// doneBtn.addEventListener("click",()=>{
//     console.log("Task Completed");
// })

addBtn.addEventListener("click",()=>{
    console.log("Task Added Successfully");
    enteredTask();

})