function balancedBrackets(string) {
  const stack = [];

  const leftBrackets = "([{";
  const rightBrackets = ")]}";

  const pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let bracket of string) {
    // if bracket is a LEFT, add it to the stack!
    if (leftBrackets.includes(bracket)) {
      stack.push(bracket);
    } else if (rightBrackets.includes(bracket)) {
      if (stack.length == 0) return false;

      if (stack[stack.length - 1] == pairs[bracket]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  // if stack empty, then there are no unmatched brackets
  return stack.length === 0;
}

console.log(balancedBrackets("([])(){}(())()()"));
