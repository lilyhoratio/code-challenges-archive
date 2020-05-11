var floodFill = function (image, sr, sc, newColor) {
  let numRows = image.length;
  let numCols = image[0].length;

  let startingPixel = image[sr][sc];
  let oldColor = startingPixel;

  if (startingPixel !== newColor) {
    startingPixel = newColor;
  }

  function fillNeighbors(sr, sc) {
    if (image[sr][sc] == oldColor) {
      image[sr][sc] = newColor;

      if (sr >= 1) fillNeighbors(sr - 1, sc);
      if (sr + 1 < numRows) fillNeighbors(sr + 1, sc);
      if (sc >= 1) fillNeighbors(sr, sc - 1);
      if (sc + 1 < numCols) fillNeighbors(sr, sc + 1);
    }
  }

  fillNeighbors(sr, sc, oldColor, newColor);

  return image;
};

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);
