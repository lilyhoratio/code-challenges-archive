// Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

// Example:

// Input: 3
// Output:
// [
//  [ 1, 2, 3 ],
//  [ 8, 9, 4 ],
//  [ 7, 6, 5 ]
// ]

function spiralMatrix(n) {
  // generate empty matrix of size n
  const matrix = [];

  for (let i = 0; i < n; i++) {
    matrix.push([...Array(n)].map(i => " "));
  }

  let currentValue = 1;
  let xStart = 0;
  let xEnd = n - 1;
  let yStart = 0;
  let yEnd = n - 1;

  // fill in matrix values
  while (xStart <= xEnd && yStart <= yEnd) {
    // right - x stays same and y increments. Increment xStart
    for (let y = yStart; y <= yEnd; y++) {
      matrix[xStart][y] = currentValue++;
    }
    xStart++;

    // down - y stays same and x increments until xEnd. Decrement yEnd
    for (let x = xStart; x <= xEnd; x++) {
      matrix[x][yEnd] = currentValue++;
    }
    yEnd--;

    // left - x stays same and y decrements until yStart. Decrement xEnd
    for (let y = yEnd; y >= yStart; y--) {
      matrix[xEnd][y] = currentValue++;
    }
    xEnd--;

    // up - y stays same and x decrements until xStart. Increment yStart
    for (let x = xEnd; x >= xStart; x--) {
      matrix[x][yStart] = currentValue++;
    }
    yStart++;
  }

  return matrix;
}

console.log(spiralMatrix(4));
