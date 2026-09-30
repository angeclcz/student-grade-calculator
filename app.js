// Student Grade Calculator

const studentName = "Angelica";

const grades = {
    math: 85,
    science: 90,
    english: 88
};

function calculateAverage(math, science, english) {
    return (math + science + english) / 3;
}

const total = grades.math + grades.science + grades.english;

const average = calculateAverage(
    grades.math,
    grades.science,
    grades.english
);

const finalGrade = Math.round(average);

let result;
let remarks;

if (finalGrade >= 75) {
    result = "PASSED";
    remarks = "Good job!";
} else {
    result = "FAILED";
    remarks = "Needs improvement.";
}

console.log("==============================");
console.log("     STUDENT GRADE CALCULATOR");
console.log("==============================");
console.log("Student: " + studentName);
console.log("------------------------------");
console.log("Math: " + grades.math);
console.log("Science: " + grades.science);
console.log("English: " + grades.english);
console.log("------------------------------");
console.log("Total: " + total);
console.log("Average: " + average.toFixed(2));
console.log("Final Grade: " + finalGrade);
console.log("Result: " + result);
console.log("Remarks: " + remarks);
console.log("==============================");