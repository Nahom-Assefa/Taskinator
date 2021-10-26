const buttonEl = document.querySelector("#save-task");
const listEl = document.querySelector("#tasks-to-do");

const createTaskHandler = function() {
const itemEl = document.createElement("li");
itemEl.textContent = "Thanos";
itemEl.className = "task-item";
listEl.appendChild(itemEl);
}

buttonEl.addEventListener('click', createTaskHandler);