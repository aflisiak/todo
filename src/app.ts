class Todo {
    constructor(public task: string) {}
}

const todos: Todo[] = [];

const form = document.querySelector("#todo-form") as HTMLFormElement;
const input = document.querySelector("#task") as HTMLInputElement;
const list = document.querySelector("#todo-list") as HTMLUListElement;

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
