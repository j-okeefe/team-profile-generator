const Intern = require("../lib/Intern");

test("Should return role of Intern", () => {
  const intern = new Intern("James OKeefe", "123", "email@email.com", "UConn");
  expect(intern.getRole()).toBe("Intern");
});
