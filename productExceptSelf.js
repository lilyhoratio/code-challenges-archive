var productExceptSelf = function(nums) {
  const product = nums.reduce((acc, num) => {
    return acc * num;
  }, 1);

  const newProduct = nums.map((num, index) => product / num);
  return newProduct;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([1, 0]));
