const TO_DO_LIST_KEY = "toDoList";

const addItemToLocalStorage = (item) => {
  let currentList = localStorage.getItem(TO_DO_LIST_KEY);
  let updatedArray = currentList.length === 0 ? [] : currentList.split(",");
  updatedArray.push(item);
  localStorage.setItem(TO_DO_LIST_KEY, updatedArray);
};

const removeItemFromLocalStorage = (item) => {
  let currentList = localStorage.getItem(TO_DO_LIST_KEY);
  let updatedArray = currentList.split(",");
  let removed = item.id;

  updatedArray.splice(removed, 1);
  localStorage.setItem(TO_DO_LIST_KEY, updatedArray);
};

export { addItemToLocalStorage, removeItemFromLocalStorage };
