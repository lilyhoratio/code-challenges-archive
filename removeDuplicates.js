// Given an array of sorted numbers, remove all duplicates from it.
// You should not use any extra space; after removing the duplicates in-place return the new length of the array.

// V1 - uses extra space for set
// function removeDuplicates(arr) {
//   // store all dupes in a set
//   let set = new Set();

//   for (let i = 0; i < arr.length; i++) {
//     if (set.has(arr[i])) {
//       arr.splice(i, 1);
//       i--;
//     } else {
//       set.add(arr[i]);
//     }
//     // console.log(i, arr[i], arr);
//   }

//   return arr.length;
// }

console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9, 9, 9])); // 4

function removeDuplicates(arr) {
  // nextNonDupe = 0
  // iterate through array
  // if the current element is not equal to the next element, set nextNonDupe++
  // current = 2
  // next = 3
  // not dupes, shift both up
  // current = 3
  // next = 3
  // yes dupes, dupeIndex at next
  // splice current out
  // 2,3,3,6,9,9
}
