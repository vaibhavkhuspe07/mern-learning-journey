let studentName="Vaibhav";
let marks=84;
let attendance=88;
let department="BCS";
let feePaid=true;

console.log("======STUDENT REPORT======");
console.log("Name: " + studentName);
console.log("Marks: " + marks);
console.log("Attendance: " + attendance+"%");
console.log("Department: " + department);

if(attendance>=75)
{
    console.log("Exam Eligibility: Eligible");
}

if(marks>=35)
{
    console.log("Result: Pass");
}
else
{
    console.log("Result: Fail");
}

if(marks>=90)
{
    console.log("Grade: A+");
}
else if(marks>=80)
{
    console.log("Grade: A");
}           
else if(marks>=70)
{
    console.log("Grade: B");
}    
else if(marks>=60)
{
    console.log("Grade: C");
}
else if(marks>=35)
{
    console.log("Grade: D");
}   
else
{
    console.log("Grade: F");
}

if(marks>=80)
{
    if(feePaid)
    {
        console.log("Scholarship: Eligible");
    }
    else
    {
        console.log("Scholarship: Pay Fees first");
    }
}
else
{
    console.log("Scholarship: Not Eligible");
}

switch(department)
{
    case "BCS":
        console.log("HOD: Dr.Patil");
        break;
    case "BCA":
        console.log("HOD: Dr.Sharma");
        break;  
    case "BSC":
        console.log("HOD: Dr.Kumar");
        break; 
     case "MCA":
        console.log("HOD : Dr. Joshi");
        break;

    default:
        console.log("Department Not Found");     
}
let attendanceStatus=attendance >= 75 ? "Good Attendance" : "Low Attendance";

console.log("Attendance :", attendanceStatus);

console.log("===================================");