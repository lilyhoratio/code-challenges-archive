// Given a string and a pattern, find out if the string contains any permutation of the pattern.

function findPermutation(str, pattern) {
  let windowStart = 0;
  let matched = 0;
  let patternCharFreq = {};

  for (let char of pattern) {
    if (!(char in patternCharFreq)) {
      patternCharFreq[char] = 0;
    }
    patternCharFreq[char] += 1;
  }
  console.log(patternCharFreq);

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd];

    // check if rightChar is in patternCharFreq
    //
    if (rightChar in patternCharFreq) {
      patternCharFreq[rightChar] -= 1;

      // if the character count in pattern matches that in string, the count of that char will be 0
      // when that happens, increment match count by 1
      if (patternCharFreq[rightChar] === 0) {
        matched += 1;
      }
    }

    // if the count of matched characters equals number of chars in pattern, return true
    if (Object.keys(patternCharFreq).length === matched) {
      return True;
    }

    // shrink window
    if (windowEnd >= pattern.length - 1) {
      let leftChar = str[windowStart];
      windowStart++;

      if (leftChar in patternCharFreq) {
        if (patternCharFreq[leftChar] === 0) {
          matched -= 1;
        }
        patternCharFreq[leftChar] += 1;
      }
    }
  }

  return false;
}

console.log(findPermutation("odicf", "cd")); // false
// console.log(findPermutation("bcdxabcdy", "bcdyabcdx")); // true
// console.log(findPermutation("aaacb", "abc")); // true
