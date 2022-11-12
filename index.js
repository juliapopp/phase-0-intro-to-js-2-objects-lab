// Write your solution in this file!
const employee = {
    name: "Gojo Satoru",
    streetAddress: "123 Jujutsu St",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};

function deleteFromEmployeeByKey(employee, key) {
    const employeeDelete = {...employee};
    delete employeeDelete[key];
    return employeeDelete;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
};
