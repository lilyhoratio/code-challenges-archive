// // sortCharactersByFrequency.js;
// Given a string, sort it in decreasing order based on the frequency of characters.

// Example 1:

// Input:
// "tree"

// Output:
// "eert"

// Explanation:
// 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

function sortCharactersByFrequency(str) {
  // hashmap of freq counter for each char
  // iterate through str and build up counter for each char
  // number of keys in hashmap = unique characters in string
  // { t: 1,
  //   r: 1,
  //   e: 2
  // }
  let result = "";
  const charFreq = {};

  for (let char of str) {
    if (!(char in charFreq)) {
      charFreq[char] = 0;
    }

    charFreq[char]++;
  }

  let charFreqArr = Object.entries(charFreq);

  charFreqArr.sort((a, b) => {
    return b[1] - a[1];
  });

  console.log("arr", charFreqArr);

  for (let i = 0; i < charFreqArr.length; i++) {
    let [char, freq] = charFreqArr[i];

    j = 0;
    while (j < freq) {
      result = result + char;

      j++;
    }
  }

  return result;
}

console.log(sortCharactersByFrequency("tree")); // "eetr" or "eert"

// console.log(sortCharactersByFrequency("bbAa")); // "bbaA" or "bbAa"
