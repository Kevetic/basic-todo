let button = document.querySelector(".add");
let input = document.querySelector("input");
let todoItem = document.querySelector("#todo-list");

button.addEventListener("click", onClick);

let todoList = [];

function onClick() {
  let newItem = document.createElement("li");

  let taskSpan = document.createElement("span");
  taskSpan.innerHTML = input.value;
  newItem.appendChild(taskSpan);

  let removeButton = document.createElement("button");
  removeButton.innerHTML = "X";
  removeButton.addEventListener("click", () => removeItem(newItem));
  newItem.appendChild(removeButton);

  todoList.push(input.value);
  todoItem.appendChild(newItem);
  input.value = "";

  localStorage.setItem("PastItems", JSON.stringify(todoList));
  console.log(todoList);
}

function removeItem(item) {
  let index = Array.from(todoItem.children).indexOf(item);
  todoList.splice(index, 1);
  todoItem.removeChild(item);
  localStorage.setItem("PastItems", JSON.stringify(todoList));
}

window.onload = () => {
  if (localStorage.PastItems) {
    let localSList = JSON.parse(localStorage.getItem("PastItems"));
    todoList = todoList.concat(localSList);
    for (let i = 0; i < localSList.length; i++) {
      let savedItems = document.createElement("li");

      let taskSpan = document.createElement("span");
      taskSpan.innerHTML = localSList[i];
      savedItems.appendChild(taskSpan);

      let removeButton = document.createElement("button");
      removeButton.innerHTML = "X";
      removeButton.addEventListener("click", () => removeItem(savedItems));
      savedItems.appendChild(removeButton);

      todoItem.appendChild(savedItems);
    }
  }
};
