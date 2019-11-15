function reverseStringArray(stringArr) {
  let startingIndex = 0;
  let endingIndex = stringArr.length - 1;

  while (startingIndex < endingIndex) {
    let lastTempChar = stringArr[endingIndex];

    stringArr[endingIndex] = stringArr[startingIndex];
    stringArr[startingIndex] = lastTempChar;

    startingIndex++;
    endingIndex--;
  }

  return stringArr;
}

console.log(reverseStringArray(["h", "e", "l", "l", "o"]));
console.log(reverseStringArray(["h", "e", "l", "l", "o", "h"]));
