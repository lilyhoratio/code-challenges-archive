function bubbleSort(array) {
  // traverse through array number by number
  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];
    let nextNum = array[i + 1];

    if (currentNum > nextNum) {
      let temp = nextNum;
      array[i + 1] = currentNum;
      // array[i] = nextNum; // changes nextNum reference
      array[i] = temp;
    }
  }
  return array;
}

console.log(
  bubbleSort([-4, 5, 10, 8, -10, -6, -4, -2, -5, 3, 5, -4, -5, -1, 1, 6])
);

console.log(bubbleSort([8, 5, 2, 9, 4, 6, 3]));
