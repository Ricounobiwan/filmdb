// import { something } from "./something";
const { something } = require("./something");

test("rien", () => {
  expect(true).toBe(true);
});

test("something ", () => {
  expect(something()).toBe(true);
});
