function maxProduct(arr) {
  let maxProduct = arr[0];
  let prevMaxProduct = arr[0];
  let prevMinProduct = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let currentMax = Math.max(
      prevMaxProduct * arr[i],
      prevMinProduct * arr[i],
      arr[i]
    );
    let currentMin = Math.min(
      prevMaxProduct * arr[i],
      prevMinProduct * arr[i],
      arr[i]
    );

    maxProduct = Math.max(maxProduct, currentMax);

    prevMaxProduct = currentMax;
    prevMinProduct = currentMin;
  }

  return maxProduct;
}

console.log(maxProduct([6, -3, -10, 0, 2])); // 180
// console.log(maxProduct([-1, -3, -10, 0, 60])); // 60
// console.log(maxProduct([-2, -3, 0, -2, -40])); // 80
