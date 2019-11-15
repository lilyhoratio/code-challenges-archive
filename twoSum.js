// var twoSum = function(nums, target) {
//     for (let i = 0 ; i < nums.length ; i++) {
//         let firstNum = nums[i]
//         let diff = target - firstNum;
//         // console.log("first num:" +  firstNum + ", diff:" + diff)

//         for (let j = i+1; j < nums.length ; j++) {
//             // console.log("index: ", j)
//             let secondNum = nums[j];
//             if (diff == secondNum) {
//                 // console.log("second num: " + secondNum)
//                 return [i,j]
//             }
//         }
//     }
//     return []
// };

// v2 - hash table
function twoNumberSum(array, targetSum) {
  let hashTable = {};
  for (let i = 0; i < array.length; i++) {
    const firstNum = array[i];
    const secondNum = targetSum - firstNum;
    // if number exists in object, check if targetSum - number is in the object
    if (secondNum in hashTable) {
      return [firstNum, secondNum];
    } else {
      // add number to object!
      hashTable[firstNum] = true;
    }
    // console.log(hashTable);
  }
  return [];
}

// v3 - set
// function twoNumberSum(array, targetSum) {
//   let set = new Set();
//   for (num of array) {
//     const potentialMatch = targetSum - num;
//     // if number exists in object, check if targetSum - number is in the object
//     if (set.has(potentialMatch)) {
//       return [num, potentialMatch];
//     } else {
//       // add number to set!
//       set.add(num);
//     }
//   }
//   return [];
// }

// v4 - sort array first
function twoNumberSum(array, targetSum) {}

console.log(twoNumberSum([4, 6], 10));
