const btnAddTaskEl = document.getElementById("btnTodo");

btnAddTaskEl.addEventListener("click", (e) => {
  e.preventDefault();
  const taskInputEl = document.getElementById("taskinput");
  const task = taskInputEl.value.trim();
  if (task == "") return alert("No tasks to be added");

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = task;
  li.appendChild(span);
  li.classList.add("list-group-item");
  const ulEl = document.getElementById("task-list");
  taskInputEl.value = "";

  const completed = document.createElement("i");
  completed.classList.add("bi", "bi-check-circle-fill", "text-success");
  li.appendChild(completed);
  completed.addEventListener("click", () => {
    span.classList.toggle("completed");
  });
  ulEl.appendChild(li);
  const remove = document.createElement("i");
  remove.classList.add("bi", "bi-trash3", "text-danger");
  li.appendChild(remove);
  remove.addEventListener("click", () => {
    li.remove();
  });
});
