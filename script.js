document.getElementById("addBtn").addEventListener("click", addTask);
document.getElementById("taskInput").addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addTask();
    }
});

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value.trim();

    if(taskValue === "") {
        alert("Please enter a task.");
        return;
    }
  
    
    let li = document.createElement("li");

    
    let taskText = document.createElement("span");
    taskText.textContent = taskValue;

    
    taskText.addEventListener("click", function(){
        taskText.classList.toggle("completed");
    });

    
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", function(){
        li.remove();
    });

    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);


    taskInput.value = "";
}
