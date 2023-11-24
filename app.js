let button = document.querySelector(".add");
let input = document.querySelector("input");
let todoItem = document.querySelector("ul");

button.addEventListener("click", onClick);

let todoList = [];

function onClick() {
  let newItem = document.createElement("li");
  let userInput = (newItem.innerHTML = input.value);
  todoList.push(userInput);
  todoItem.appendChild(newItem);
  localStorage.setItem("PastItems", JSON.stringify(todoList));
  console.log(todoList);
}

window.onload = () => {
  if (localStorage.length > 0) {
    let localSList = JSON.parse(localStorage.getItem("PastItems"));
    console.log(localSList);
    for (let i = 0; i < localSList.length; i++) {
      let reloadItem = document.createElement("li");
      reloadItem.innerHTML = localSList[i];
      todoItem.append(reloadItem);
    }
  }
};
