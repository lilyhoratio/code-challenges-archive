function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    console.log(i);
    for (let j = i; j >= 0 && array[j] < array[j - 1]; j--) {
      console.log("before swap", array);
      //swap
      let temp = array[j - 1];
      array[j - 1] = array[j];
      array[j] = temp;
      console.log("after swap", array);
    }
  }

  return array;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
