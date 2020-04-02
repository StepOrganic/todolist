const storage = require("../src/storage");
const TODO_KEY = "toDoList";

describe("Test user flow effects on local storage", () => {
  beforeEach(() => {
    localStorage.setItem(TODO_KEY, "");
  });

  afterEach(() => {
    localStorage.removeItem(TODO_KEY);
  });

  test("adding an item on the local storage", () => {
    storage.addItem("say hello!");
    storage.addItem("say bye!");

    expect(localStorage[TODO_KEY]).toEqual("say hello!,say bye!");
  });

  test("deleting an item from the local storage", () => {
    storage.addItem("say hello!");
    storage.addItem("say bye!");

    storage.deleteItem(0);
    expect(localStorage[TODO_KEY]).toEqual("say hello!");
  });
});
