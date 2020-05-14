var removeKdigits = function (num, k) {
  if (num.length === k) return "0";

  const stack = [];
  let removed = 0;

  // putting each digit onto the stack!
  for (let n of num) {
    while (stack.length && n < stack[stack.length - 1] && removed < k) {
      stack.pop();
      removed++;
    }
    stack.push(n);
  }
  console.log(stack);

  // remove all remaining large numbers
  while (removed < k) {
    stack.pop();
    removed++;
  }

  // remove leading zeroes
  while (stack.length && stack[0] === "0") {
    stack.shift();
  }

  return stack.join("");
};

// console.log(removeKdigits("10", 1)); // "0"
console.log(removeKdigits("5337", 2));
