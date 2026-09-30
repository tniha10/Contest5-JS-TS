{/**Given an array of student attendance records, generate a formatted report string for each student.
Each student record is an object with the following properties:
name (string): The student's name.
present (number): The number of sessions attended.
total (number): The total number of sessions.

For each student:
Calculate their attendance percentage rounded to the nearest integer using Math.round((present / total) * 100).
Determine their status based on this rounded percentage:
90% and above: "Excellent"
75% through 89%: "Good"
Below 75%: "At Risk"
Format the result as "<name>: <present>/<total> (<percentage>%) - <status>".
Return an array of these formatted strings in the same order as the input.

Examples
formatAttendanceReport([{ name: "Rafi", present: 18, total: 20 }]);
// ["Rafi: 18/20 (90%) - Excellent"]

formatAttendanceReport([
  { name: "Lina", present: 15, total: 20 },
  { name: "Sam", present: 12, total: 20 }
]);

// ["Lina: 15/20 (75%) - Good", "Sam: 12/20 (60%) - At Risk"]

Example 1
Input: students = [{"name":"Rafi","present":18,"total":20}]
Output: ["Rafi: 18/20 (90%) - Excellent"]
Explanation: 18 / 20 is 90%, which qualifies as Excellent.

Example 2
Input: students = [{"name":"Lina","present":15,"total":20},{"name":"Sam","present":12,"total":20}]
Output: ["Lina: 15/20 (75%) - Good","Sam: 12/20 (60%) - At Risk"]
Explanation: Lina has 75% (Good) and Sam has 60% (At Risk).

Constraints
0 <= students.length <= 1000
1 <= total <= 1000
0 <= present <= total
student.name is a non-empty string */}

function formatAttendanceReport(students) {

  return students.map((student) => {
    const percentage = Math.round((student.present / student.total) * 100);
    
    let status;

    if (percentage >= 90) {
      status = "Excellent";
    }
    else if (percentage >= 75) {
      status = "Good";
    }
    else {
      status = "At Risk";
    }

    return `${student.name}: ${student.present}/${student.total} (${percentage}%) - ${status}`;
  });
}