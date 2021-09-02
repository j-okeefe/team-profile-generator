const Engineer = require("../lib/Engineer");

test("Should return role of Engineer", () => {
  const role = "Engineer";
  const engineer = new Engineer("James OKeefe", "123", "email@email.com", "j-okeefe");
  expect(engineer.getRole()).toBe("Engineer");
});