// Given an array of characters where each character represents a fruit tree, you are given
// two baskets and your goal is to put maximum number of fruits in each basket.
// The only restriction is that each basket can have only one type of fruit.

// You can start with any tree, but once you have started you can’t skip a tree.
// You will pick one fruit from each tree until you cannot, i.e.,
// you will stop when you have to pick from a third fruit type.

// function fruitIntoBaskets(fruits) {
//   let maxFruits = 0;
//   const fruitFrequency = {};
//   let windowStart = 0;

//   for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
//     // keep adding new fruit encountered into fruitFrequency, until
//     // the number of distinct fruit (keys) goes over 2

//     // once number of keys goes over 2, increment windowStart
//     // then, once you hit 2, re-update maxFruits

//     let rightFruit = fruits[windowEnd];

//     if (!(rightFruit in fruitFrequency)) {
//       fruitFrequency[rightFruit] = 0;
//     }

//     fruitFrequency[rightFruit]++;

//     while (Object.keys(fruitFrequency).length > 2) {
//       let leftFruit = fruits[windowStart];

//       console.log(leftFruit);

//       fruitFrequency[leftFruit] -= 1;
//       if (fruitFrequency[leftFruit] === 0) delete fruitFrequency[leftFruit];

//       windowStart++;
//     }

//     maxFruits = Math.max(maxFruits, windowEnd - windowStart + 1);
//   }

//   return maxFruits;
// }

console.log(fruitIntoBaskets(["A", "B", "C", "B", "B", "C"])); // 5

function fruitIntoBaskets(fruits) {
  // k = 2
  let maxFruits = 0;
  let windowStart = 0;
  const fruitFreq = {};

  // add fruit to fruitFreq hashmap

  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    let rightFruit = fruits[windowEnd];

    if (!(rightFruit in fruitFreq)) {
      fruitFreq[rightFruit] = 0;
    }

    fruitFreq[rightFruit]++;

    while (Object.keys(fruitFreq).length > 2) {
      let leftFruit = fruits[windowStart];
      windowStart++;

      if (fruitFreq[leftFruit]) {
        fruitFreq[leftFruit]--;

        if (fruitFreq[leftFruit] === 0) {
          delete fruitFreq[leftFruit];
        }
      }
    }

    maxFruits = Math.max(windowEnd - windowStart + 1, maxFruits);
  }

  return maxFruits;
}
