var removeKdigits = function (num, k) {
  if (num.length === k) return "0";

  const stack = [];
  let removed = 0;

  for (let n of num) {
    while (stack.length && n < stack[stack.length - 1] && removed < k) {
      stack.pop();
      removed++;
    }
    stack.push(n);
  }

  // remove remaining large numbers
  while (removed < k) {
    stack.pop();
    removed++;
  }

  // remove all beginning zeroes
  while (stack.length && stack[0] === "0") {
    stack.shift();
  }

  // return String(Number(stack.join(""))); // this results in bug for large test case
  return stack.join("");
};

// From Azra

// function removeKdigits(num, k) {
//   if (num.length === k) return "0";

//   const stack = [];

//   for (let n of num) {
//     while (stack.length > 0 && n < stack[stack.length - 1] && k > 0) {
//       stack.pop();
//       k--;
//     }
//     stack.push(n);
//   }

//   console.log(stack);
// }

// console.log(removeKdigits("10", 1)); // "0"
// console.log(removeKdigits("5337", 2));
console.log(removeKdigits("112", 1)); // "11";
