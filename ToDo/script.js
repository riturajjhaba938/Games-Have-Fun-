let todoList = JSON.parse(localStorage.getItem("todoData")) || [];
let streak = Number(localStorage.getItem("streak")) || 0;
let lastCompletedDate = localStorage.getItem("lastCompletedDate") || "";

const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-button");
const list = document.getElementById("all-todos");
const delAll = document.getElementById("delete-all");
const delDone = document.getElementById("delete-selected");

const cCount = document.getElementById("c-count");
const rCount = document.getElementById("r-count");
const sCount = document.getElementById("s-count");

function render(data = todoList) {
    list.innerHTML = "";
    data.forEach(t => {
        list.innerHTML += `
        <li class="${t.complete ? "completed" : ""}" data-id="${t.id}">
            <p>${t.text}</p>
            <div class="actions">
                <button class="complete"><i class='bx bx-check'></i></button>
                <button class="delete"><i class='bx bx-trash'></i></button>
            </div>
        </li>`;
    });
    updateStats();
    localStorage.setItem("todoData", JSON.stringify(todoList));
}

function updateStats() {
    const completed = todoList.filter(t => t.complete).length;
    cCount.textContent = completed;
    rCount.textContent = todoList.length;
    sCount.textContent = streak + " 🔥";
}

addBtn.onclick = addTask;
input.addEventListener("keydown", e => e.key === "Enter" && addTask());

function addTask() {
    if (!input.value.trim()) return;
    todoList.push({ id: Date.now(), text: input.value, complete: false });
    input.value = "";
    render();
}

list.addEventListener("click", e => {
    const li = e.target.closest("li");
    if (!li) return;
    const id = Number(li.dataset.id);

    if (e.target.closest(".delete")) {
        todoList = todoList.filter(t => t.id !== id);
    }

    if (e.target.closest(".complete")) {
        todoList = todoList.map(t =>
            t.id === id ? { ...t, complete: !t.complete } : t
        );

        const today = new Date().toDateString();
        if (today !== lastCompletedDate) {
            streak++;
            lastCompletedDate = today;
            localStorage.setItem("streak", streak);
            localStorage.setItem("lastCompletedDate", today);
        }
    }
    render();
});

delAll.onclick = () => {
    todoList = [];
    render();
};

delDone.onclick = () => {
    todoList = todoList.filter(t => !t.complete);
    render();
};

render();
