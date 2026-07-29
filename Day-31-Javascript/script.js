console.log("====== STUDENT MARKS MANAGEMENT SYSTEM ======");

// Arrays
let students = ["Vaibhav", "Rahul", "Sneha", "Priya"];
let marks = [85, 72, 91, 66];

// Display Students
console.log("\nStudents List");
for(let i = 0; i < students.length; i++){
    console.log((i+1) + ". " + students[i] + " - " + marks[i]);
}

// Access Array Element
console.log("\nFirst Student:");
console.log(students[0]);

// Update Element
students[1] = "Rohan";
console.log("\nUpdated Second Student:");
console.log(students[1]);

// Length
console.log("\nTotal Students:");
console.log(students.length);

// Push
students.push("Anjali");
marks.push(80);

console.log("\nAfter Push:");
console.log(students);

// Pop
students.pop();
marks.pop();

console.log("\nAfter Pop:");
console.log(students);

// Shift
students.shift();
marks.shift();

console.log("\nAfter Shift:");
console.log(students);

// Unshift
students.unshift("Amit");
marks.unshift(88);

console.log("\nAfter Unshift:");
console.log(students);

// Final List
console.log("\n====== FINAL STUDENT LIST ======");

for(let i = 0; i < students.length; i++){
    console.log(students[i] + " : " + marks[i]);
}

console.log("===============================");