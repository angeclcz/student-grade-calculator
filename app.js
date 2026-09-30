const studentName = "Angelica";

const math = 85;
const science = 90;
const english = 88;

const total = math + science + english;
const average = total / 3;
const finalGrade = Math.round(average);

let result;

if (finalGrade >= 75) {
    result = "Passed";
} else {
    result = "Failed";
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