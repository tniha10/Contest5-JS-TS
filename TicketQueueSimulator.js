{/**Simulate a customer service ticket line based on a list of event commands. Your function should process the commands in order and return an object with two arrays: queue (the people still waiting, in order from front to back) and served (the people who were served, in the order they were served).

The possible commands are:
"join <name>": Adds <name> to the back of the queue. If someone with that name is already in the queue, ignore the command.
"leave <name>": Removes <name> from the queue if they are currently waiting. If they are not in the queue, ignore the command.
"serve": Removes the person at the front of the queue and appends their name to served. If the queue is empty, do nothing.
Note: A person who has been served is no longer in the queue and may join again later.

Examples

Example 1
simulateTicketQueue([
  "join Rafi",
  "join Sara",
  "serve",
  "join Alex",
  "leave Sara",
  "serve"
]);
// Returns: { queue: [], served: ["Rafi", "Alex"] }

Example 2
simulateTicketQueue([
  "serve",
  "join Bob",
  "join Bob",
  "leave Alice",
  "join Alice",
  "serve"
]);
// Returns: { queue: ["Alice"], served: ["Bob"] }

Example 1
Input: commands = ["join Rafi","join Sara","serve","join Alex","leave Sara","serve"]
Output: {"queue":[],"served":["Rafi","Alex"]}
Explanation: Rafi is served first. Sara leaves, leaving Alex next. Alex is served next.

Example 2
Input: commands = ["serve","join Bob","join Bob","leave Alice","join Alice","serve"]
Output: {"queue":["Alice"],"served":["Bob"]}
Explanation: Initial serve on empty queue does nothing. Duplicate join Bob is ignored. Alice is served after Bob.

Constraints
0 <= commands.length <= 1000
Each command string is either "serve", "join <name>", or "leave <name>"
Names are non-empty strings and case-sensitive */}

function simulateTicketQueue(commands) {
  const queue = [];
  const served = [];

  for(const cmd of commands){
    if(cmd === "serve"){
      if(queue.length > 0){
        served.push(queue.shift());
      }
    }
    else if(cmd.startsWith("join ")) {
      const name = cmd.slice(5);
      if(!queue.includes(name)){
        queue.push(name);
      }
    } 
    else if(cmd.startsWith("leave ")){
      const name= cmd.slice(6);
      const idx = queue.indexOf(name);
      if(idx !== -1){
        queue.splice(idx, 1);
      }
    }
  }
  return {queue, served};
}