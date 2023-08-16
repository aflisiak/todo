"use strict";
class Todo {
    constructor(task) {
        this.task = task;
    }
}
const todos = [];
const form = document.querySelector("#todo-form");
const input = document.querySelector("#task");
const list = document.querySelector("#todo-list");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = input.value.trim();
    if (task !== "") {
        todos.push(new Todo(task));
        input.value = "";
        renderTodos();
    }
});
function renderTodos() {
    list.innerHTML = "";
    todos.forEach((todo) => {
        const li = document.createElement("li");
        li.textContent = todo.task;
        list.appendChild(li);
    });
}
renderTodos();
