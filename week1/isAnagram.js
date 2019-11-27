// https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s, t) {
    const sSorted = s.split("").sort().join("")
    const tSorted = t.split("").sort().join("")
    return sSorted === tSorted;
    
// lol I overcomplicated it...but good practice of array methods I guess
//     const sArr = s.split("");
//     const sCountChars = sArr.reduce((object,char) => {
//         object[char] = (object[char] || 0) + 1
//         return object
//     },{})
    
//     // console.log(sCountChars)
    
//     const tArr = t.split("");
//     const tCountChars = tArr.reduce((object, char) => {
//         object[char] = (object[char] || 0) - 1
//         return object
//     },sCountChars)
    
//     // console.log(tCountChars)
    
//     // if all values in object are 0, then return true
//     countCharArr = Object.values(tCountChars) // [0,0,0]
//     return countCharArr.filter(count=> count !== 0).length == 0 ? true : false
};