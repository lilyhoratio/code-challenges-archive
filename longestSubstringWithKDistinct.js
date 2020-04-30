// Given a string, find the length of the longest substring in it with no more than K distinct characters.

const longest_substring_with_k_distinct = function (str, k) {
  let maxLength = 0;
  let characterCount = {};
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd];

    if (!(rightChar in characterCount)) {
      characterCount[rightChar] = 0;
    }
    characterCount[rightChar] += 1;

    // If we have more than K distinct characters in frequency counter, move windowStart to the right
    while (Object.keys(characterCount).length > k) {
      let leftChar = str[windowStart];
      console.log(leftChar);

      characterCount[leftChar] -= 1; // decrement the number of unique times seen
      if (characterCount[leftChar] === 0) {
        delete characterCount[leftChar];
      }
      windowStart += 1;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
};

function longestSubstringWithKDistinct(str, k) {
  let maxLength = 0;
  let charFreq = {};
  let windowStartIdx = 0;

  for (let windowEndIdx = 0; windowEndIdx < str.length; windowEndIdx++) {
    let rightChar = str[windowEndIdx];

    // populate frequency counter
    if (!charFreq[rightChar]) {
      charFreq[rightChar] = 0;
    }
    charFreq[rightChar] += 1;

    // let countUniques = Object.keys(charFreq).length;

    while (Object.keys(charFreq).length > k) {
      let leftChar = str[windowStartIdx];

      charFreq[leftChar] -= 1;

      if (charFreq[leftChar] === 0) {
        delete charFreq[leftChar];
      }

      windowStartIdx++;
    }

    maxLength = Math.max(maxLength, windowEndIdx - windowStartIdx + 1);
  }

  return maxLength;
}

console.log(longestSubstringWithKDistinct("cbbebi", 3)); //5
