const storage = require("../src/storage");
// const ind = require("../index");

describe("Test user flow effects on local storage", () => {
  test("adding an item on the local storage", () => {
    // expect(localStorage).toEqual({});
    storage.addItem("say hello!");

    expect(localStorage["toDoList"]).toEqual("say hello!");
  });
});
