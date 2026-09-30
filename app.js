const studentName = "Angelica";

const math = 85;
const science = 90;
const english = 88;

function calculateAverage(math, science, english) {
    return (math + science + english) / 3;
}

const total = math + science + english;
const average = calculateAverage(math, science, english);
const finalGrade = Math.round(average);

let result;
let remarks;

if (finalGrade >= 75) {
    result = "Passed";
    remarks = "Good job!";
} else {
    result = "Failed";
    remarks = "Needs improvement.";
}

console.log("Student Grade Calculator");
console.log("Student: " + studentName);
console.log("Math: " + math);
console.log("Science: " + science);
console.log("English: " + english);
console.log("Total: " + total);
console.log("Average: " + average);
console.log("Final Grade: " + finalGrade);
console.log("Result: " + result);
console.log("Remarks: " + remarks);