export default function createIteratorObject(report) {
  const employees = report.allEmployees;

  function* employeeGenerator() {
    for (const department in employees) {
      if (Object.prototype.hasOwnProperty.call(employees, department)) {
        for (const employee of employees[department]) {
          yield employee;
        }
      }
    }
  }

  return employeeGenerator();
}
