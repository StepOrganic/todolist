const LOCAL_STORAGE_KEY = "toDoList";
const inputBox = document.getElementById("input-box");
const container = document.getElementById("display-list");



// Starts here, once JS is loaded
// checks if localStorage contains a todo list
// if there is NO todo list, initialize local storage with empty list
if (!localStorage.getItem(LOCAL_STORAGE_KEY)) {
  initStorageWithEmptyToDoList();
} else {
  // else run an update, so it renders the UI with the existing list.
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
  // addItemToListUI(newToDoItem);
  addItemToList(newToDoItem);
  removeItemFromList()

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
  localStorage.setItem(LOCAL_STORAGE_KEY, [item]);
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
      itemButton[i].addEventListener('click' , deleteModalPopUp, getItemToDelete(itemButton[i]))
    }
   }  
  }

  //Delete Confirmation dialog box
  function deleteModalPopUp(item){ 
    document.getElementById('delModal').style.display='block';
  }

// *** Procedure: Delete an Item
  function getItemToDelete(item) {
    removeItemFromList(item)
  }

  function removeItemFromList(item) {
    // update storage
    removeItemFromLocalStorage(item);

    //ToDo: instead of removing per item,
    // refresh UI with the entire new ToDo list.
    removeItemFromListUI(item);
  }

  function removeItemFromLocalStorage(item) {
    localStorage.removeItem(LOCAL_STORAGE_KEY, [item]);
  }

  function removeItemFromListUI(item){
    console.log(item)
  }





  

const formToSubmit = document.getElementById("toDoForm");
    function handleForm(event) { 
      event.preventDefault(); 
      inputBox.value = "";
    } 
    formToSubmit.addEventListener('submit', handleForm);

    


    

    

    
