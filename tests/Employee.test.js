const Employee = require("../lib/Employee");

test("Should return the employee name", () => {
  const employee = new Employee("James OKeefe");
  expect(employee.getName()).toBe("James OKeefe");
});
