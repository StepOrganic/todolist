function addToDoItem() {
    const inputBox = document.getElementById("input-box")
    const newToDoItem = inputBox.value;
    const container = document.getElementById("display-list");

    container.insertAdjacentHTML('beforeend', '<li class="btn btn-light">' + newToDoItem +'</li>');
    inputBox.value = "";
  }