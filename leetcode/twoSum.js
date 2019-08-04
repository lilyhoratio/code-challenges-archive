/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0 ; i < nums.length ; i++) {
        let firstNum = nums[i]
        let diff = target - firstNum;
        // console.log("first num:" +  firstNum + ", diff:" + diff)
        
        for (let j = i+1; j < nums.length ; j++) {
            // console.log("index: ", j)
            let secondNum = nums[j];
            if (diff == secondNum) {
                // console.log("second num: " + secondNum)
                return [i,j]
            }
        }
    }
    return []
};