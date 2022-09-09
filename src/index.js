import "./styles.css";
const button = document.getElementById("my-button");
const addButton = document.getElementById("add-data");
let heading = document.getElementById("heading-1");
const ul = document.getElementById("list");
let message = document.getElementById("tarea");
button.addEventListener("click", click1);
addButton.addEventListener("click", click2);

function click1() {
  console.log("hello world");
  heading.innerHTML = "My notebook";
}

function click2() {
  let li = document.createElement("li");
  li.innerText = message.value;
  ul.appendChild(li);
}
