const taskList = document.getElementById("task-list");
const input = document.getElementById("task-name");
const createBtn = document.getElementById("create-btn");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();

createBtn.addEventListener("click", function() {
    const taskName = input.value;
    tasks.push(taskName)
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
    input.value = "";
})

function renderTasks() {
    taskList.textContent = "";
    for(let i=0; i<tasks.length; i++){
        const list = document.createElement("li");
        list.textContent = `${tasks[i]}`;
        taskList.append(list);
};
    
    
}