let inputBox = document.getElementById("text-box");
let addButton = document.querySelector("button");
let pendingTasks = document.querySelector(".pending-tasks-interface");

const addTask = () => {
  let task = document.getElementById("text-box").value;
  let newTask = document.createElement("newTask");
  newTask.className = "col-4";
  newTask.innerHTML = task;
  let checkMark = document.createElement("button");
  checkMark.textContent = "Completed?";
  checkMark.className = "col-4 check-mark";
  let removeButton = document.createElement("button");
  removeButton.textContent = "Remove?";
  removeButton.className = "col-4 remove-button";
  pendingTasks.appendChild(checkMark);
  pendingTasks.appendChild(newTask);
  pendingTasks.appendChild(removeButton);
};

addButton.addEventListener("click", addTask);
