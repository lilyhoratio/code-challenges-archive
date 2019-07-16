// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: J = "aA", S = "aAAbbbb"
// Output: 3

// Example 2:

// Input: J = "z", S = "ZZ"
// Output: 0

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

var numJewelsInStones = function(J, S) {
    // can maybe do if character is found in the string (S.indexOf(J) is not -1), add 1 to count
    let count = 0
    S.split("").forEach((stones,index) => { // b a A A ....
        // console.log(stones);
        // if stone ("b") is in the jewels, add 1 to count
        if (J.includes(stones)) {
            count++
        } 
    })

    return count
};

console.log(numJewelsInStones("z", "ZZ")) // 0