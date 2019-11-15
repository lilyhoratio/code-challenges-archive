var uniqueOccurrences = function(arr) {
  // initialize empty map to store unique integer (key) and count of integer (value)
  let myMap = new Map();

  // loop through array
  // if the current integer exists as a key in object, add one to its count
  // else, add that integer as the key with 1 as its count

  for (let num of arr) {
    if (myMap.has(num)) {
      myMap.set(num, myMap.get(num) + 1);
    } else {
      myMap.set(num, 1);
    }
  }

  let mySet = new Set();

  for (let count of myMap.values()) {
    if (mySet.has(count)) {
      return false; // duplicate counts are there
    } else {
      mySet.add(count);
    }
  }
  return true;
};

// console.log(uniqueOccurrences([1,2,2,1,1,3]))
