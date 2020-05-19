// // String Anagrams (hard) #
// // Given a string and a pattern, find all anagrams of the pattern in the given string.

// // Anagram is actually a Permutation of a string. For example, “abc” has the following six anagrams:

// // abc
// // acb
// // bac
// // bca
// // cab
// // cba
// // Write a function to return a list of starting indices of the anagrams of the pattern in the given string.

// // Example 1:

// // Input: String="ppqp", Pattern="pq"
// // Output: [1, 2]
// // Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".

// function findStringAnagrams(str, pattern) {
//   const patternFrequency = {};

//   for (let char of pattern) {
//     if (!(char in patternFrequency)) {
//       patternFrequency[char] = 0;
//     }

//     patternFrequency[char] += 1;
//   }

//   let windowStart = 0;
//   let matched = 0;
//   const resultIndices = [];

//   for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
//     const rightChar = str[windowEnd];

//     if (rightChar in patternFrequency) {
//       // decrement freq of matched character
//       patternFrequency[rightChar]--;

//       if (patternFrequency[rightChar] === 0) {
//         matched++;
//       }
//     }

//     // found an anagram, so push the start of the anagram onto result
//     if (matched === Object.keys(patternFrequency).length) {
//       resultIndices.push(windowStart);
//     }

//     // shrink sliding window when windowEnd is greater than pattern length
//     if (windowEnd >= pattern.length - 1) {
//       leftChar = str[windowStart];
//       windowStart++;
//       if (patternFrequency[leftChar] === 0) {
//         matched--; // before putting the character back, decrement matched count
//       }
//       patternFrequency[leftChar]++;
//     }
//   }
//   return resultIndices;
// }

console.log(findStringAnagrams("abbcabc", "abc")); // [2,3,4]

function findStringAnagrams(str, pattern) {
  // Build character frequency counter based on pattern
  // Keep track of matched characters in sliding window across str (matched = 0)

  const charFreq = {};
  let matched = 0;
  let windowStart = 0;
  const resultIdxs = [];

  for (let char of pattern) {
    if (!(char in charFreq)) {
      charFreq[char] = 0;
    }

    charFreq[char]++;
  }

  // // Loop through str
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    // check if char in str exists in freqcounter
    // if exists, subtract 1 from counter
    // if count is 0, delete key and increase match count

    let rightChar = str[windowEnd];

    if (rightChar in charFreq) {
      charFreq[rightChar] -= 1;

      if (charFreq[rightChar] == 0) {
        matched++;
      }
    }

    if (Object.keys(charFreq).length === matched) {
      resultIdxs.push(windowStart);
    }

    // while loop to check if windowend - window start > pattern.length
    // keep track of starting window char (left)
    // increment windowstart
    // check if left char is in freqcounter

    if (windowEnd >= pattern.length - 1) {
      let leftChar = str[windowStart]; // a
      if (charFreq[leftChar] === 0) {
        matched--;
      }

      windowStart++; // bbc

      charFreq[leftChar]++;
    }
  }

  return resultIdxs;
}
