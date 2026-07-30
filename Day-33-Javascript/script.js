// =========================================
// Day 33
// Employee Data Processor
// =========================================

console.log("========== EMPLOYEE DATA PROCESSOR ==========\n");

// =========================================
// Employee Object
// =========================================

const employee = {

    id: 101,
    name: "Vaibhav",
    department: "Development",
    salary: 65000,
    city: "Indapur",

    skills: ["HTML", "CSS", "JavaScript"]

};


// =========================================
// 1. Object Destructuring
// =========================================

console.log("1. Object Destructuring");

const { name, department, salary } = employee;

console.log("Name :", name);
console.log("Department :", department);
console.log("Salary :", salary);

console.log("--------------------------------");


// =========================================
// 2. Array Destructuring
// =========================================

console.log("2. Array Destructuring");

const [skill1, skill2, skill3] = employee.skills;

console.log(skill1);
console.log(skill2);
console.log(skill3);

console.log("--------------------------------");


// =========================================
// 3. Spread Operator (Array Copy)
// =========================================

console.log("3. Spread Operator - Copy Array");

const copiedSkills = [...employee.skills];

console.log(copiedSkills);

console.log("--------------------------------");


// =========================================
// 4. Spread Operator (Object Copy)
// =========================================

console.log("4. Spread Operator - Copy Object");

const copiedEmployee = {

    ...employee

};

console.log(copiedEmployee);

console.log("--------------------------------");


// =========================================
// 5. Merge Arrays
// =========================================

console.log("5. Merge Arrays");

const frontend = ["HTML", "CSS"];

const backend = ["Node.js", "MongoDB"];

const fullStack = [...frontend, ...backend];

console.log(fullStack);

console.log("--------------------------------");


// =========================================
// 6. Merge Objects
// =========================================

console.log("6. Merge Objects");

const personalInfo = {

    age: 21,
    country: "India"

};

const completeEmployee = {

    ...employee,
    ...personalInfo

};

console.log(completeEmployee);

console.log("--------------------------------");


// =========================================
// 7. Rest Operator
// =========================================

console.log("7. Rest Operator");

function calculateBonus(...bonus){

    let total = 0;

    for(let amount of bonus){

        total += amount;

    }

    return total;

}

console.log("Total Bonus :", calculateBonus(5000,3000,2000));

console.log("--------------------------------");


// =========================================
// 8. Update Object Using Spread
// =========================================

console.log("8. Update Employee");

const updatedEmployee = {

    ...employee,
    salary:70000,
    department:"Full Stack Development"

};

console.log(updatedEmployee);

console.log("--------------------------------");

console.log("========== PROJECT COMPLETED ==========");