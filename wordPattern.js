var wordPattern = function(pattern, str) {
  // early return if number of unique elements in inputs are different
  // if(new Set(pattern).size !== new Set(str).size) return false

  // initialize empty object, where key will be pattern letter and key will be word
  let myObj = {};
  str = str.split(" ");
  pattern = pattern.split("");

  pattern.forEach((letter, index) => {
    myObj[letter] = str[index];
  });

  console.log("object", myObj);
  return pattern.map(p => myObj[p]).join(" ") === str.join(" ");
  // dog, dog, dog, dog === "dog cat dog dog" // false
  //   console.log("here", myObj);
};

// console.log(wordPattern("abba", "dog cat cat dog"))
console.log(wordPattern("abba", "dog cat dog dog")); // pattern, str
