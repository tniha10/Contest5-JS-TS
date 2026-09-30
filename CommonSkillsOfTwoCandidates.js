{/**Given two arrays of candidate skill names, find all skills shared by both candidates.

The comparison must be case-insensitive. The returned array must:
Contain each shared skill converted to lowercase.
Contain no duplicate values.
Be sorted alphabetically in ascending order.

Examples
commonSkills(["JS", "React", "Node"], ["react", "css", "js"]);
// Returns: ["js", "react"]
commonSkills(["Python", "SQL"], ["Java", "C++"]);
// Returns: []

Example 1
Input: skills1 = ["JS","React","Node"], skills2 = ["react","css","js"]
Output: ["js","react"]
Explanation: Matching skills are "js" and "react", returned in alphabetical order.

Example 2
Input: skills1 = ["Python","SQL"], skills2 = ["Java","C++"]
Output: []
Explanation: No common skills exist.

Constraints
0 <= skills1.length, skills2.length <= 1000
1 <= skills1[i].length, skills2[i].length <= 50
Skill strings contain English letters, numbers, and basic punctuation (e.g., +, #). */}

function commonSkills(skills1, skills2) {

  const set1 = new Set(skills1.map(s=> s.toLowerCase()));
  const set2 = new Set(skills2.map(s=> s.toLowerCase()));

  const common = [];
  for(const skill of set1){
    if(set2.has(skill)) {
      common.push(skill);
    }
  }

  return common.sort();
}