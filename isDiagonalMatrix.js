function isDiagonalMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let currentArray = matrix[i];

    console.log(currentArray);

    for (let j = 0; j < currentArray.length; j++) {
      let currentNum = currentArray[j];

      if (i !== j && currentNum !== 0) {
        return false;
      }
    }
  }
  return true;
}

matrix = [
  [1, 0, 0],
  [0, 5, 0],
  [0, 0, 3]
];

console.log(isDiagonalMatrix(matrix));
