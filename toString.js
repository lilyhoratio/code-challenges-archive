function addTwoDigits(n) {
  let stringDigit = n.toString().split("");

  console.log(stringDigit);

  return stringDigit.reduce((acc, num) => {
    return acc + Number(num);
  }, 0);
}

console.log(addTwoDigits(29));
