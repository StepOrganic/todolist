const LOCAL_STORAGE_KEY = "toDoList";

if (!localStorage.getItem(LOCAL_STORAGE_KEY)) {
  initStorageWithEmptyToDoList();
} else {
  updateToDoList();
}

function initStorageWithEmptyToDoList() {
  localStorage.setItem(LOCAL_STORAGE_KEY, []);
  updateToDoList();
}

function updateToDoList() {
  // get current list
  const currentList = localStorage.getItem(LOCAL_STORAGE_KEY);
  // get new item from input

  const newToDoItem = getNewToDoItem();
  console.log(newToDoItem);
  // append new item to list
  addItemToListUI(newToDoItem);
}

function getNewToDoItem() {
  const inputBox = document.getElementById("input-box");
  return inputBox.value;
}

function addItemToList(item) {
  // update storage
  addItemToLocalStorage(newToDoItem);

  //ToDo: instead of adding per item,
  // refresh UI with the entire new ToDo list.
  addItemToListUI(newToDoItem);
}

function addItemToLocalStorage(item) {
  localStorage.setItem(LOCAL_STORAGE_KEY, [item]);
}

function addItemToListUI(item) {
  const container = document.getElementById("display-list");

  container.insertAdjacentHTML(
    "beforeend",
    '<li class="btn btn-light">' + item + "</li>"
  );
}
