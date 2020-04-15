import { addItemToLocalStorage, removeItemFromLocalStorage } from "./storage";
import { refreshUI } from "./ui";

const TO_DO_LIST_KEY = "toDoList";
const inputBox = document.getElementById("input-box");
const container = document.getElementById("display-list");
const clearButton = document.getElementById("clear-button");
const deleteButton = document.getElementById("delete-button");

window.onload = function () {
  const todoForm = document.getElementById("toDoForm");
  todoForm.addEventListener("submit", submitForm);
  clearButton.addEventListener("click", clearList);
  deleteButton.addEventListener("click", getItemToDelete);
  refreshUI(container, inputBox);
  inputBox.focus();
};

function submitForm(event) {
  event.preventDefault();

  const newToDoItem = getNewToDoItem();
  addItemToLocalStorage(newToDoItem);
  refreshUI(container, inputBox);
}

// attach 'onclick' to each populated element for delete confirmation
const itemButton = document.querySelectorAll(".task-item");
for (var i = 0; i < itemButton.length; i++) {
  itemButton[i].addEventListener("click", deleteModalPopUp);
  itemButton[i].setAttribute("id", i);
}

function getNewToDoItem() {
  const inputBox = document.getElementById("input-box");
  return inputBox.value;
}

let toBeDeleted;

function deleteModalPopUp(event) {
  document.getElementById("delModal").style.display = "block";
  const item = event.target;
  toBeDeleted = item;
}

function getItemToDelete() {
  let item = toBeDeleted;
  removeItemFromLocalStorage(item);
  document.getElementById("delModal").style.display = "none";
}

function clearList() {
  localStorage.setItem(TO_DO_LIST_KEY, []);
  refreshUI(container, inputBox);
}
