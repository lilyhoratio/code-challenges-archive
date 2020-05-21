// Given an array of sorted numbers, remove all duplicates from it.
// You should not use any extra space; after removing the duplicates in-place return the new length of the array.

function removeDuplicates(arr) {
  // store all dupes in a set

  let set = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      arr.splice(i, 1);
      i--;
    } else {
      set.add(arr[i]);
    }
    // console.log(i, arr[i], arr);
  }

  return arr.length;
}

console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9])); // 4
