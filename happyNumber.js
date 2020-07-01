function isHappyNumber(num) {
  const seen = {};

  while (num !== 1 && !(num in seen)) {
    const stringInt = String(num);

    const stringArr = stringInt.split("");

    let sum = 0;
    seen[num] = true;

    for (const number of stringArr) {
      sum += number * number;
    }

    num = sum;
  }

  return num === 1;
}

console.log(isHappyNumber(7)); // true
console.log(isHappyNumber(4)); // false
