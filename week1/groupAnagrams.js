// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

function groupAnagrams(anagrams) {
  // create object
  // loop through array
  // sort each word
  // if sorted word exists in object, push word to it
  // if sorted word doesn't exist in object, initialize key with empty []
  // create array
  // loop through object keys
  // concat key's values
  // return array

  const anagramGroups = {};

  for (let word of anagrams) {
    let sortedWord = word
      .split("")
      .sort()
      .join("");
    if (anagramGroups[sortedWord]) {
      anagramGroups[sortedWord].push(word);
    } else {
      anagramGroups[sortedWord] = [word];
    }
  }

  return Object.values(anagramGroups);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
