const TO_DO_LIST_KEY = "toDoList";

const addTodoListToUI = (container) => {
  const itemsList = localStorage.getItem(TO_DO_LIST_KEY);
  const storedArray = itemsList.split(",");
  storedArray.forEach((element) => addItemToListUI(container, element));
};

const addItemToListUI = (container, item) => {
  container.insertAdjacentHTML(
    "beforeend",
    "<li class='btn btn-light task-item'>" + item + "</li>"
  );
};

const clearTodoListFromUI = (container) => {
  container.innerHTML = "";
};

const clearInputBox = (inputBox) => {
  inputBox.value = "";
};

const refreshUI = (container, inputBox) => {
  clearTodoListFromUI(container);
  clearInputBox(inputBox);
  addTodoListToUI(container);
};

export { refreshUI };
