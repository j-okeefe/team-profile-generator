const Manager = require("../lib/Manager");

test("Should return role of Manager", () => {
  const manager = new Manager("James OKeefe", "123", "email@email.com", "1000");
  expect(manager.getRole()).toBe("Manager");
});
