const TO_DO_LIST_KEY = "toDoList";
const inputBox = document.getElementById("input-box");
const container = document.getElementById("display-list");
const clearButton = document.getElementById("clear-button");

window.onload = function () {
  const todoForm = document.getElementById("toDoForm");
  todoForm.addEventListener("submit", submitForm);
  clearButton.addEventListener("click", clearList);
  refreshUI();
  inputBox.focus();
};

function submitForm(event) {
  event.preventDefault();

  const newToDoItem = getNewToDoItem();
  addItemToLocalStorage(newToDoItem);
  refreshUI();
}

function refreshUI() {
  clearTodoListFromUI();
  clearInputBox();
  addTodoListToUI();
}

function clearInputBox() {
  inputBox.value = "";
}

function clearTodoListFromUI() {
  container.innerHTML = "";
}

// *** Procedure: Adding an Item
// *** UI ***
function addTodoListToUI() {
  const itemsList = localStorage.getItem(TO_DO_LIST_KEY);
  const storedArray = itemsList.split(",");
  storedArray.forEach((element) => addItemToListUI(element));
}

function addItemToListUI(item) {
  container.insertAdjacentHTML(
    "beforeend",
    "<li class='btn btn-light task-item'>" + item + "</li>"
  );

  // attach 'onclick' to each populated element for delete confirmation
  const itemButton = document.querySelectorAll(".task-item");
  for (var i = 0; i < itemButton.length; i++) {
    itemButton[i].addEventListener("click", deleteModalPopUp);
    itemButton[i].setAttribute("id", i);
  }
}

function getNewToDoItem() {
  const inputBox = document.getElementById("input-box");
  return inputBox.value;
}

function addItemToLocalStorage(item) {
  let currentList = localStorage.getItem(TO_DO_LIST_KEY);
  let updatedArray = currentList.length === 0 ? [] : currentList.split(",");
  updatedArray.push(item);
  localStorage.setItem(TO_DO_LIST_KEY, updatedArray);
}

// TODO: Fix delete flow.
// *** Procedure: Delete an Item

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

function removeItemFromLocalStorage(item) {
  let currentList = localStorage.getItem(TO_DO_LIST_KEY);
  let updatedArray = currentList.split(",");
  let removed = item.id;
  console.log(removed);

  updatedArray.splice(removed, 1);
  console.log(updatedArray);

  localStorage.setItem(TO_DO_LIST_KEY, updatedArray);
  window.location.reload();
}

function clearList() {
  localStorage.setItem(TO_DO_LIST_KEY, []);
  refreshUI();
}
