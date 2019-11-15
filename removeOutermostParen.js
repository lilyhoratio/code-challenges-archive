var removeOuterParentheses = function(S) {
  let count = 0;
  let returnString = "";

  for (let i = 0; i < S.length; i++) {
    let paren = S[i];
    console.log("iteration: ", i);
    console.log("paren: ", paren);

    if (paren === "(") {
      // start count at second paren in input string
      if (count !== 0) {
        returnString += paren;
      }
      count++;
      console.log("return string:", returnString);
    } else if (paren === ")") {
      // don't add to string if
      if (count !== 1) {
        returnString += paren;
      }
      count--;
      console.log("return string:", returnString);
    }
  }

  return returnString;
};

console.log(removeOuterParentheses("(()())(())")); // "()()()"
console.log(removeOuterParentheses("(()())(())(()(()))")); // "()()()()(())"
console.log(removeOuterParentheses("()()")); // ""
