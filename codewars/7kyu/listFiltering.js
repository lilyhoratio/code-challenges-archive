function filter_list(l) {
  // Return a new array with the strings filtered out
  let numList = []; //empty array
  
  for (let i = 0 ; i < l.length ; i++) {
    if (typeof l[i] === 'number') {
       numList.push(l[i]);
    }
  }
  return numList;
  
}