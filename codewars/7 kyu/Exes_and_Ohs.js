function XO(str) {
  let xcount = 0;
  let ocount = 0;
  
  for (i=0 ; i < str.length ; i++) {
    if (str[i] === 'x' || str[i] === 'X') {
      xcount++;
    }
    if (str[i] === 'o' || str[i] === 'O') {
      ocount++;
    }
  }
  return (xcount === ocount ? true : false);
}
