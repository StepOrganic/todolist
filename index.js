const TO_DO_LIST_KEY = "toDoList";
const inputBox = document.getElementById("input-box");
const container = document.getElementById("display-list");

// Starts here, once JS is loaded
// checks if localStorage contains a todo list
// if there is NO todo list, initialize local storage with empty list
if (!localStorage.getItem(TO_DO_LIST_KEY)) {
  initStorageWithEmptyToDoList();
} else {
  // else run an update, so it renders the UI with the existing list.
  updateToDoList();
}

function initStorageWithEmptyToDoList() {
  localStorage.setItem(TO_DO_LIST_KEY, []);
  
  updateToDoList();
}

function updateToDoList() {
  // get new item from input
  const newToDoItem = getNewToDoItem();
  
  // append new item to list
  // addItemToListUI(newToDoItem);
  if(!newToDoItem == " "){
  addItemToList(newToDoItem);
  }
}

// *** Procedure: Add an Item
function getNewToDoItem() {
  // const inputBox = document.getElementById("input-box");
  return inputBox.value;
}

function addItemToList(item) {
  // update storage
  addItemToLocalStorage(item);

  //ToDo: instead of adding per item,
  // refresh UI with the entire new ToDo list.
  addItemToListUI(item);
}

function addItemToLocalStorage(item) {
  const originalArray = localStorage.getItem(TO_DO_LIST_KEY);
  let currentList = localStorage.getItem(TO_DO_LIST_KEY);
  let updatedArray = currentList.split(',');
  updatedArray.push(item);

  console.log(updatedArray);
  localStorage.setItem(TO_DO_LIST_KEY, updatedArray);
}

function addItemToListUI(item) {
  // const container = document.getElementById("display-list");
  
  //Check if any task-item populated
  if(item.length >0){
    container.insertAdjacentHTML(
      "beforeend",
      "<li class='btn btn-light task-item'>" + item + "</li>"
    );
    //if any, attach 'onclick' to each populated element for delete confirmation
    const itemButton = document.querySelectorAll('.task-item')
    for (var i = 0 ; i < itemButton.length; i++) {
      itemButton[i].addEventListener('click' , deleteModalPopUp)
    }
   }  
  }

  let toBeDeleted;
  
  function deleteModalPopUp(event){ 
    document.getElementById('delModal').style.display='block';

      console.log(" item-button Clicked + deleteModal pops up");
      const item = event.target
      console.log(item);
      toBeDeleted = item;
  } 

// *** Procedure: Delete an Item

  function getItemToDelete() {
    let item = toBeDeleted;
    console.log(item);
    removeItemFromList(item);
    document.getElementById('delModal').style.display='none'
  }
  
  function removeItemFromList(item) {
    // update storage
    removeItemFromLocalStorage(item);

    //ToDo: instead of removing per item,
    // refresh UI with the entire new ToDo list.
    removeItemFromListUI(item);
  }

  function removeItemFromLocalStorage(item) {
    localStorage.removeItem(TO_DO_LIST_KEY, [item]);
  }

  function removeItemFromListUI(item){
    console.log("Delete button Clicked!")
    container.removeChild(item);
  }


  const formToSubmit = document.getElementById("toDoForm");
    function handleForm(event) { 
      event.preventDefault(); 
      inputBox.value = "";
    } 
    formToSubmit.addEventListener('submit', handleForm);

    


    

    

    
