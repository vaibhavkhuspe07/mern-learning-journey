let students=[
    {name:"Suman",marks:95,present:true},
    {name:"Vaibhav",marks:85,present:true},
    {name:"Amit",marks:72,present:true},
    { name: "Rahul", marks: 72, present: true },
    { name: "Sneha", marks: 91, present: true }
];

console.log("==== Day 28  PROJECT ====");

console.log("1. Student marks (For loop)");
for(let i=0;i<students.length;i++)
{
    console.log(students[i].name+" : "+students[i].marks);
}   


console.log("--------------------------------");

console.log("2. Failed Students (While Loop)");

let i = 0;

while (i < students.length)
{

    if (students[i].marks < 35) 
    {
        console.log(students[i].name + " has Failed");
    }

    i++;
}

console.log("--------------------------------");


console.log("3. Attendance (Do While)");

let count = 0;

do 
{

    console.log(students[count].name + " is Present");

    count++;

} while (count < 2);

console.log("--------------------------------");



console.log("4. Classroom Seating");

for (let row = 1; row <= 3; row++) 
{

    let seats = "";

    for (let col = 1; col <= 4; col++) 
    {

        seats += "[R" + row + "S" + col + "] ";

    }

    console.log(seats);

}

console.log("--------------------------------");



console.log("5. Finding Topper");

for (let i = 0; i < students.length; i++) 
{

    if (students[i].marks >= 90) 
    {

        console.log("Topper Found : " + students[i].name);
        break;

    }

}

console.log("--------------------------------");

console.log("6. Present Students");

for (let i = 0; i < students.length; i++) 
{

    if (!students[i].present) 
    {

        continue;

    }

    console.log(students[i].name);

}

console.log("--------------------------------");

console.log("====== Project Completed ======");




