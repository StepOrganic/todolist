import { addItem, deleteItem } from "./src/storage";
const TO_DO_LIST_KEY = "toDoList";
const inputBox = document.getElementById("input-box");
const container = document.getElementById("display-list");

// Starts here, once JS is loaded
// checks if localStorage contains a todo list
// if there is NO todo list, initialize local storage with empty list
window.onload = function() {
  updateToDoList();
  inputBox.focus();
};

function updateToDoList() {
  // get new item from input
  const newToDoItem = getNewToDoItem();

  if (!newToDoItem == " ") {
    // onSubmit, if input box is NOT empty
    // addItemToLocalStorage(newToDoItem);
    addItem(newToDoItem);
  } else {
    const itemsList = localStorage.getItem(TO_DO_LIST_KEY);
    const storedArray = itemsList.split(",");
    storedArray.forEach(element => addItemToListUI(element));
  }
}

// *** Procedure: Adding an Item

function getNewToDoItem() {
  return inputBox.value;
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
    itemButton[i].setAttribute("id", i + 1);
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

const formToSubmit = document.getElementById("toDoForm");
function handleForm(event) {
  event.preventDefault();
  inputBox.value = "";
}
formToSubmit.addEventListener("submit", handleForm);
