function maxSubsetSumNoAdjacent(array) {
  let maxSums = [...array];

  maxSums[1] = Math.max(array[0], array[1]);

  for (let i = 2; i < array.length; i++) {
    maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + maxSums[i]);
    console.log(maxSums);
  }

  return maxSums[maxSums.length - 1];
}

console.log(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]));
