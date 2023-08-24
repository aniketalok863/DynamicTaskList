const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const listItem = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const taskLabel = document.createElement("span");
  taskLabel.textContent = taskText;
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  
  listItem.appendChild(checkbox);
  listItem.appendChild(taskLabel);
  listItem.appendChild(deleteButton);
  taskList.appendChild(listItem);

  checkbox.addEventListener("change", toggleCompleted);
  deleteButton.addEventListener("click", deleteTask);

  taskInput.value = "";
}

function toggleCompleted(event) {
  const listItem = event.target.parentElement;
  listItem.classList.toggle("completed");
}

function deleteTask(event) {
  const listItem = event.target.parentElement;
  taskList.removeChild(listItem);
}
