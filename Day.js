{/**Write a function that takes a year, month, and day as numbers and returns the name of the weekday for that date.

Note that the month parameter is 1-indexed (1 for January, 2 for February, ..., 12 for December).

Examples
getDayOfWeek(2024, 5, 11); // "Saturday"
getDayOfWeek(2023, 1, 1);   // "Sunday"

Example 1
Input: year = 2024, month = 5, day = 11
Output: "Saturday"
Explanation: May 11, 2024 was a Saturday.

Example 2
Input: year = 2023, month = 1, day = 1
Output: "Sunday"
Explanation: January 1, 2023 was a Sunday.

Constraints
year will be an integer between 1900 and 2100.
month will be an integer between 1 and 12.
day will be a valid day for the given month and year. */}

function getDayOfWeek(year, month, day) {

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const date = new Date(year, month-1, day);
  return days[date.getDay()];
}