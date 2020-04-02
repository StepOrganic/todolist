const TO_DO_LIST_KEY = "toDoList";

function addItem(item) {
  currentList = getList();
  updatedArray = currentList[0] == "" ? [item] : [...currentList, item];

  localStorage.setItem(TO_DO_LIST_KEY, updatedArray);
  return updatedArray.length;
}

function deleteItem(id) {
  currentList = getList();
  localStorage.setItem(TO_DO_LIST_KEY, currentList.splice(id, 1));
}

function getList() {
  let currentList = localStorage.getItem(TO_DO_LIST_KEY);
  return currentList.split(",");
}

module.exports = {
  addItem,
  deleteItem
};
