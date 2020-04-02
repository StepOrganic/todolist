const TO_DO_LIST_KEY = "toDoList";

function addItem(item) {
  let currentList = localStorage.getItem(TO_DO_LIST_KEY) || "";
  currentList = currentList.split(",");
  console.log(currentList);

  updatedArray = currentList[0] == "" ? [item] : [...currentList, item];

  localStorage.setItem(TO_DO_LIST_KEY, updatedArray);
}

function deleteItem(id) {}

module.exports = {
  addItem,
  deleteItem
};
