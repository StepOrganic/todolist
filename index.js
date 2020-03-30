const TO_DO_LIST_KEY = "toDoList";
const inputBox = document.getElementById("input-box");
const container = document.getElementById("display-list");

// Starts here, once JS is loaded
// checks if localStorage contains a todo list
// if there is NO todo list, initialize local storage with empty list
window.onload = function(){
  if (!localStorage.getItem(TO_DO_LIST_KEY)) {
    initStorageWithEmptyToDoList();
  } else {
    // else run an update, so it renders the UI with the existing list.
    updateToDoList();
  }
}

function initStorageWithEmptyToDoList() {
  localStorage.setItem(TO_DO_LIST_KEY, []);
  updateToDoList();
}

function updateToDoList() {
  // get new item from input
  const newToDoItem = getNewToDoItem();

  if(!newToDoItem == " "){
    addItemToList(newToDoItem);
  }
  else if (localStorage.getItem(TO_DO_LIST_KEY)) {
    const itemsList = localStorage.getItem(TO_DO_LIST_KEY);
    const storedArray = itemsList.split(',');
    storedArray.forEach(element => addItemToListUI(element));
  }
  }

// *** Procedure: Adding an Item

function getNewToDoItem() {
  return inputBox.value;
}

function addItemToList(item) {

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

  localStorage.setItem(TO_DO_LIST_KEY, updatedArray);
}

function addItemToListUI(item) {
  // const container = document.getElementById("display-list");
  
  //Check if any task-item populated
  if(item.length >0){
    var i;
    for (i = 0; i < item.length; i++) {
      container.insertAdjacentHTML(
      "beforeend",
      "<li class='btn btn-light task-item'>" + item + "</li>"
    );
  }
    
    //if any, attach 'onclick' to each populated element for delete confirmation
    const itemButton = document.querySelectorAll('.task-item')
    for (var i = 0 ; i < itemButton.length; i++) {
      itemButton[i].addEventListener('click' , deleteModalPopUp)
      itemButton[i].setAttribute("id", i)
    }
   }  
  }

  let toBeDeleted;
  
  function deleteModalPopUp(event){ 
    document.getElementById('delModal').style.display='block';
      const item = event.target
      toBeDeleted = item;
  } 

// *** Procedure: Delete an Item

  function getItemToDelete() {
    let item = toBeDeleted;
    removeItemFromList(item);
    document.getElementById('delModal').style.display='none'
  }
  
  function removeItemFromList(item) {
    // update storage
    removeItemFromLocalStorage(item);
    removeItemFromListUI(item);
  }

  function removeItemFromLocalStorage(item) {
    let trashItem = item.innerText;
    console.log(item.id);

    const originalArray = localStorage.getItem(TO_DO_LIST_KEY);
    console.log(originalArray);

    let currentList = localStorage.getItem(TO_DO_LIST_KEY);
    console.log(currentList);

    let updatedArray = currentList.split(',');
    console.log(updatedArray);

    let removed = updatedArray.indexOf(item.innerText);
    console.log(removed); 


    // Correction needed: logging the first matching example item.

    updatedArray.splice(removed,1)
    console.log(updatedArray);

  
    localStorage.setItem(TO_DO_LIST_KEY, updatedArray);
  }

  function removeItemFromListUI(item){
    container.removeChild(item);
  }

  const formToSubmit = document.getElementById("toDoForm");
    function handleForm(event) { 
      event.preventDefault(); 
      inputBox.value = "";
    } 
    formToSubmit.addEventListener('submit', handleForm);

