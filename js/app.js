const taskList = document.getElementById("task-list");
const input = document.getElementById("task-name");
const createBtn = document.getElementById("create-btn");

createBtn.addEventListener("click", function() {
    const taskName = input.value;
    const list = document.createElement("li")
    list.innerHTML = `${taskName}`
    taskList.append(list)
})