const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {... employee};
    newEmployee[key] = value;
    return newEmployee;
};

function UpdateEmployeeWithKeyAndValue(employee, key, value ) {
    employee.streetAddress = "12 Broadway";
    return employee;
};

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];

    return newEmployee;
};


function destructivelyDeleteFromEmployeeByKey(employee, value) {
    delete employee.name;

    return employee;
};

employee.name = 'Sam';
employee.streetAddress = '12 Broadway';
function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value
    
    return employee;
};

