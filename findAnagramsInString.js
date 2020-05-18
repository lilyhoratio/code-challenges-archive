// String Anagrams (hard) #
// Given a string and a pattern, find all anagrams of the pattern in the given string.

// Anagram is actually a Permutation of a string. For example, “abc” has the following six anagrams:

// abc
// acb
// bac
// bca
// cab
// cba
// Write a function to return a list of starting indices of the anagrams of the pattern in the given string.

// Example 1:

// Input: String="ppqp", Pattern="pq"
// Output: [1, 2]
// Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".

function findStringAnagrams(str, pattern) {
  const patternFrequency = {};

  for (let char of pattern) {
    if (!(char in patternFrequency)) {
      patternFrequency[char] = 0;
    }

    patternFrequency[char] += 1;
  }

  let windowStart = 0;
  let matched = 0;
  const resultIndices = [];

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];

    if (rightChar in patternFrequency) {
      // decrement freq of matched character
      patternFrequency[rightChar]--;

      if (patternFrequency[rightChar] === 0) {
        matched++;
      }
    }

    // found an anagram, so push the start of the anagram onto result
    if (matched === Object.keys(patternFrequency).length) {
      resultIndices.push(windowStart);
    }

    // shrink sliding window when windowEnd is greater than pattern length
    if (windowEnd >= pattern.length - 1) {
      leftChar = str[windowStart];
      windowStart++;
      if (patternFrequency[leftChar] === 0) {
        matched--; // before putting the character back, decrement matched count
      }
      patternFrequency[leftChar]++;
    }
  }
  return resultIndices;
}

console.log(findStringAnagrams("abbcabc", "abc")); // [2,3,4]
