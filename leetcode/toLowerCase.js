https://leetcode.com/problems/to-lower-case/

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    // v1
    // return str.toLowerCase()
    
    // v2    
    strLowerCase = str.split("").map((char, index) => {  // ["H", "e", "l", ...]
        if (str.charCodeAt(index) >= 65 && str.charCodeAt(index) <= 90 ) {
            // console.log(char, index)
            let lowerCharIndex = str.charCodeAt(index) + 32 
            char = String.fromCharCode(lowerCharIndex)
            return char
        } else {
            return char
        }
    }).join("")
    
    return strLowerCase
};

console.log(toLowerCase("Hello")) 
console.log(toLowerCase("HOWDY")) 
console.log(toLowerCase("here")) 