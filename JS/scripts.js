let inputBox = document.getElementById("text-box");
let addButton = document.querySelector("button");
let removeButton = document.querySelector("remove-button");
let pendingTasks = document.querySelector(".pending-tasks-interface");
let completedTasks = document.querySelector(".completed-tasks-interface");

const addTask = () => {
  let task = document.getElementById("text-box").value;
  let newTask = document.createElement("newTask");
  newTask.className = "col-4 new-task";
  newTask.innerHTML = task;
  let checkMark = document.createElement("button");
  checkMark.textContent = "Completed?";
  checkMark.className = "col-4 check-mark task-button";
  let removeButton = document.createElement("button");
  removeButton.textContent = "Remove?";
  removeButton.className = "col-4 remove-button task-button";
  pendingTasks.appendChild(checkMark);
  pendingTasks.appendChild(newTask);
  pendingTasks.appendChild(removeButton);

  /////////
  const removeTask = () => {
    pendingTasks.removeChild(checkMark);
    pendingTasks.removeChild(newTask);
    pendingTasks.removeChild(removeButton);
  };
  /////////

  const moveTaskToCompleted = () => {
    console.log("hello");
    let checkMarkClone = checkMark.cloneNode(true);
    checkMarkClone.className = "col-4 check-mark-clone task-button";
    let newTaskClone = newTask.cloneNode(true);
    newTaskClone.className = "col-4 new-task-clone";
    let removeButtonClone = removeButton.cloneNode(true);
    removeButtonClone.className = "col-4 remove-button-clone task-button";
    completedTasks.appendChild(checkMarkClone);
    completedTasks.appendChild(newTaskClone);
    completedTasks.appendChild(removeButtonClone);
    pendingTasks.removeChild(checkMark);
    pendingTasks.removeChild(newTask);
    pendingTasks.removeChild(removeButton);

    ///////////////////
    const removeTaskOnClone = () => {
      completedTasks.removeChild(checkMarkClone);
      completedTasks.removeChild(newTaskClone);
      completedTasks.removeChild(removeButtonClone);
    };
    ///////////////

    const moveBackToPending = () => {
      console.log("hello");
      let checkMark = checkMarkClone.cloneNode(true);
      checkMark.className = "col-4 check-mark task-button";
      let newTask = newTaskClone.cloneNode(true);
      newTask.className = "col-4 new-task";
      let removeButton = removeButtonClone.cloneNode(true);
      removeButton.className = "col-4 remove-button task-button";
      pendingTasks.appendChild(checkMark);
      pendingTasks.appendChild(newTask);
      pendingTasks.appendChild(removeButton);
      completedTasks.removeChild(checkMarkClone);
      completedTasks.removeChild(newTaskClone);
      completedTasks.removeChild(removeButtonClone);
    };

    checkMarkClone.addEventListener("click", moveBackToPending);
    removeButtonClone.addEventListener("click", removeTaskOnClone);
  };

  checkMark.addEventListener("click", moveTaskToCompleted);
  removeButton.addEventListener("click", removeTask);
};

addButton.addEventListener("click", addTask);
