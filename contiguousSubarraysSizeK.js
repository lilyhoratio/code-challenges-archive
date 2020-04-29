// average of all contiguous subarrays of size "K" in it

// brute force
// function findAverageOfSubarrays(arr, K) {
//   const result = [];

//   for (let i = 0; i < arr.length - K + 1; i++) {
//     sum = 0;

//     for (let j = i; j < i + K; j++) {
//       sum += arr[j];
//     }

//     result.push(sum / K);
//   }
//   return result;
// }

// SLIDING WINDOW APPROACH
function findAverageOfSubarrays(arr, K) {
  const result = [];
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    if (windowEnd >= K - 1) {
      // -1 (index 4)
      let windowAvg = windowSum / K;
      result.push(windowAvg);

      windowSum -= arr[windowStart]; // 10
      windowStart++;
    }
  }
  return result;
}
console.log(findAverageOfSubarrays([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));
