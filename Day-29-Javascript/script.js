
let employeeName = "Vaibhav";
let department = "Software Development";
let monthlySalary = 40000;

function displayEmployee() {

    console.log("===== EMPLOYEE DETAILS =====");
    console.log("Name :", employeeName);
    console.log("Department :", department);
    console.log("Monthly Salary : ₹" + monthlySalary);

}

function annualSalary(monthly) {

    console.log("Annual Salary : ₹" + monthly * 12);

}

function calculateBonus(salary) {

    return salary * 0.10;

}

const departmentInfo = function () {

    console.log("Department : " + department);

};


const calculateTax = (salary) => salary * 0.05;

displayEmployee();

annualSalary(monthlySalary);

let bonus = calculateBonus(monthlySalary);

console.log("Bonus : ₹" + bonus);

departmentInfo();

console.log("Tax : ₹" + calculateTax(monthlySalary));

console.log("============================");