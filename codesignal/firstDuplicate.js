// not passing runtime test

function firstDuplicate(a) {
  let countDupe = 0;
  let lowestIndex = a.length + 1

  for (let i = 0 ; i < a.length ; i++) {
    let currentElement = a[i];
    // console.log('current element ' + currentElement);

    for (let j = i + 1 ; j < a.length ; j++) {
      let nextElement = a[j];
      // console.log('next element ' + nextElement);

      // check if dupe
      if (currentElement === nextElement) {
        // console.log("dupe index is " + j);
        if (j < lowestIndex) {
          lowestIndex = j;
        }
      }
    }
  }
  return a[lowestIndex];
}

console.log(firstDuplicate([2, 4, 3, 5, 1]));

