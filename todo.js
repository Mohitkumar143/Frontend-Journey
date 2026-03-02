let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function() {
    let taskText = taskInput.value.trim();
    if(taskText === ""){
        alert("Please enter a task.");
    }else{
        let listItem = document.createElement("li");
        listItem.textContent = taskText;
        taskList.appendChild(listItem);
        taskInput.value = ""; 
    }
});
