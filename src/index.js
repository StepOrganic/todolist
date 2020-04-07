const TO_DO_LIST_KEY = "toDoList";
const inputBox = document.getElementById("input-box");
const container = document.getElementById("display-list");

// import storage from "./src/storage";
// Starts here, once JS is loaded
// checks if localStorage contains a todo list
// if there is NO todo list, initialize local storage with empty list
window.onload = function () {
  const todoForm = document.getElementById("toDoForm");
  todoForm.addEventListener("submit", submitForm);

  if (!localStorage.getItem(TO_DO_LIST_KEY)) {
    initStorageWithEmptyToDoList();
  } else {
    // else run an update, so it renders the UI with the existing list.
    updateToDoList();
  }
  inputBox.focus();
};

function initStorageWithEmptyToDoList() {
  console.log("init");
  localStorage.setItem(TO_DO_LIST_KEY, []);
  updateToDoList();
}

function submitForm(event) {
  event.preventDefault();
  console.log("submit");
  console.log(event.target.value);
  console.log(inputBox.value);
}

function updateToDoList() {
  console.log("update to do list");
  // get new item from input
  const newToDoItem = getNewToDoItem();
  event.preventDefault();

  if (!newToDoItem == " ") {
    // onSubmit, if input box is NOT empty
    addItemToLocalStorage(newToDoItem);
  } else if (localStorage.getItem(TO_DO_LIST_KEY)) {
    const itemsList = localStorage.getItem(TO_DO_LIST_KEY);
    const storedArray = itemsList.split(",");
    storedArray.forEach((element) => addItemToListUI(element));
  }
}

// *** Procedure: Adding an Item

function getNewToDoItem() {
  const inputBox = document.getElementById("input-box");
  console.log(`INPUT VALUE: > ${inputBox.value}`);
  return inputBox.value;
}

function addItemToLocalStorage(item) {
  let currentList = localStorage.getItem(TO_DO_LIST_KEY);
  let updatedArray = currentList.length === 0 ? [] : currentList.split(",");
  updatedArray.push(item);

  localStorage.setItem(TO_DO_LIST_KEY, updatedArray);
  // After we update the DB, we trigger a refresh on the UI with the complete new list.
  window.location.reload();
}

function addItemToListUI(item) {
  //Check if any task-item populated
  if (item.length > 0) {
    container.insertAdjacentHTML(
      "beforeend",
      "<li class='btn btn-light task-item'>" + item + "</li>"
    );
  }
  //if any, attach 'onclick' to each populated element for delete confirmation
  const itemButton = document.querySelectorAll(".task-item");
  for (var i = 0; i < itemButton.length; i++) {
    itemButton[i].addEventListener("click", deleteModalPopUp);
    itemButton[i].setAttribute("id", i);
  }
}

let toBeDeleted;

function deleteModalPopUp(event) {
  document.getElementById("delModal").style.display = "block";
  const item = event.target;
  toBeDeleted = item;
}

// *** Procedure: Delete an Item

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

// const formToSubmit = document.getElementById("toDoForm");
// function handleForm(event) {
//   event.preventDefault();
//   inputBox.value = "";
// }
// formToSubmit.addEventListener("submit", handleForm);

function clearList() {
  localStorage.setItem(TO_DO_LIST_KEY, []);
  // After we update the DB, we trigger a refresh on the UI with the complete new list.
  window.location.reload();
}

console.log(`window in js ${window}`);
console.log(`locale storage ${localStorage.getItem(TO_DO_LIST_KEY)}`);
