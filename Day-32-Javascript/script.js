console.log("========== STUDENT PROFILE ==========");

// Creating Object
const student = {
    id: 101,
    name: "Vaibhav",
    age: 21,
    course: "BCS",
    college: "Vidya Pratishthan",
    city: "Indapur",

    displayInfo: function () {
        console.log("Student Name :", this.name);
        console.log("Course :", this.course);
        console.log("College :", this.college);
    }
};

// Display Complete Object
console.log(student);

console.log("\n1. Display Student Details");
student.displayInfo();


// Accessing Properties
console.log("\n2. Accessing Properties");
console.log("Name :", student.name);
console.log("Course :", student["course"]);


// Updating Property
console.log("\n3. Updating Course");
student.course = "MCA";
console.log(student);


// Adding New Property
console.log("\n4. Adding Email");
student.email = "vaibhav@gmail.com";
console.log(student);


// Deleting Property
console.log("\n5. Deleting Age");
delete student.age;
console.log(student);


// Object Keys
console.log("\n6. Object Keys");
console.log(Object.keys(student));


// Object Values
console.log("\n7. Object Values");
console.log(Object.values(student));


// Object Entries
console.log("\n8. Object Entries");
console.log(Object.entries(student));


// Loop Through Object
console.log("\n9. Loop Through Object");

for (let key in student) {
    console.log(key + " : " + student[key]);
}

console.log("\n========== PROJECT COMPLETED ==========");