//declaring variable 



const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");



//event listener for the add button 


addTask.addEventListener("click", function(){

    let task= document.createElement("div");
    task.classList.add("task");

    let li = document.createElement("li");
    li.innerText=`${inputTask.value}`;
    task.append(li);
    

    let checkButton = document.createElement("button");
    checkButton.innerHTML = `<i class="fa fa-check"></i>`;
    checkButton.classList.add("checkTask");
    task.appendChild(checkButton);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="fa fa-trash"></i>`;
    deleteButton.classList.add("deleteTask");
    task.appendChild(deleteButton);


    if (inputTask.value === ""){
        alert("please enter task !!");
    }

    else{
        taskContainer.appendChild(task)
    }

})