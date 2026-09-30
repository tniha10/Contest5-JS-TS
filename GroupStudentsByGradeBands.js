{/**You are given an array of student objects, each with a name (string) and marks (number). Your task is to group these students into different grade bands based on their marks.

The grade bands are defined as follows:
A: Marks 80 or above
B: Marks between 70 and 79 (inclusive)
C: Marks between 60 and 69 (inclusive)
F: Marks below 60
The function should return an object where the keys are the grade bands ('A', 'B', 'C', 'F') and the values are arrays of student objects belonging to that band. If a band has no students, its array should be empty.

Examples
// Example 1
const students1 = [
  { name: "Alice", marks: 85 },
  { name: "Bob", marks: 72 },
  { name: "Charlie", marks: 58 },
  { name: "David", marks: 91 }
];
// Should return:
// {
//   A: [{ name: "Alice", marks: 85 }, { name: "David", marks: 91 }],
//   B: [{ name: "Bob", marks: 72 }],
//   C: [],
//   F: [{ name: "Charlie", marks: 58 }]
// }

// Example 2
const students2 = [
  { name: "Eve", marks: 65 },
  { name: "Frank", marks: 60 }
];
// Should return:
// {
//   A: [],
//   B: [],
//   C: [{ name: "Eve", marks: 65 }, { name: "Frank", marks: 60 }],
//   F: []
// }

Example 1
Input: students = [{"marks":85,"name":"Alice"},{"marks":72,"name":"Bob"},{"marks":58,"name":"Charlie"},{"marks":91,"name":"David"}]
Output: {"A":[{"marks":85,"name":"Alice"},{"marks":91,"name":"David"}],"B":[{"marks":72,"name":"Bob"}],"C":[],"F":[{"marks":58,"name":"Charlie"}]}

Example 2
Input: students = [{"marks":65,"name":"Eve"},{"marks":60,"name":"Frank"}]
Output: {"A":[],"B":[],"C":[{"marks":65,"name":"Eve"},{"marks":60,"name":"Frank"}],"F":[]}

Constraints
The `students` array will contain between 0 and 100 student objects.
Each student object will have a `name` (string) and `marks` (number).
Student `marks` will be an integer between 0 and 100, inclusive.*/}

function groupStudentsByGradeBand(students) {

  return students.reduce((acc, student) => {
    const marks = student.marks;

    if(marks >= 80) {
      acc.A.push(student);
    }
    else if(marks >=70){
      acc.B.push(student);
    }
    else if(marks >= 60){
      acc.C.push(student);
    }
    else{
      acc.F.push(student);
    }

    return acc;
  }, { A: [], B: [], C: [], F:[]});
}