// v2

console.log(isValid("(([))")); // false
console.log(isValid("(())")); // true
console.log(isValid("[]{}")); // true
console.log(isValid("{[]}")); // true
console.log(isValid("{[]}()")); // true
console.log(isValid("}{}{")); // false
console.log(isValid(null)); // false
console.log(isValid("")); // false


function isValid(s) {
    const stack = [];

    const pairsMap = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }

    if (s == undefined || s.length == 0 || s === null) return false;

    for (let i = 0 ; i < s.length ; i++) {
        let char = s[i];

        // if char is a left paren, add the corresponding right paren to the stack
        if (char in pairsMap) {
            stack.push(pairsMap[char])
        // if char is a right paren, check if it is the most recent stack element. If it isn't, return false
        } else {
            // if (stack.pop() !== char || stack.length === 0) {
            if (stack.length === 0 || stack.pop() !== char) {
                return false;
            }
        }
        // console.log(stack)
    }
    // if the stack has nothing inside of it, is valid! yay!
    return stack.length === 0;
};

// var isValid = function(s) {
    // const stack = [];
    
    // for (let i = 0 ; i < s.length ; i++) {
    //     console.log("Run #: ", i)
        
    //     if (s[i] === "(") {
    //         stack.unshift(s[i]);
    //     }
        
    //     if (s[i] === ")") {
    //         if (stack[0] === "(") {
    //             stack.shift();
    //         } else {
    //             return false;
    //         }
    //     }
        
    //     if (s[i] === "{") {
    //         stack.unshift(s[i]);
    //     }
        
    //     if (s[i] === "}") {
    //         if (stack[0] === "{") {
    //             stack.shift();
    //         } else {
    //             return false;
    //         }
    //     }
        
    //     if (s[i] === "[") {
    //         stack.unshift(s[i]);
    //     }
        
    //     if (s[i] === "]") {
    //         if (stack[0] === "[") {
    //             stack.shift();
    //         } else {
    //             return false;
    //         }
    //     }
    //     console.log(stack)
    // }
//     return stack.length===0
// };

    
// Doesn't work with forEach
// var isValid = function(s) {
//     const stack = [];

//     s.split("").forEach( (paren, index) => {
//         console.log("Run #: ", index)
        
//         if (paren === "(") {
//             stack.unshift(paren);
//         }
        
//         if (paren === ")") {
//             if (stack[0] === "(") {
//                 stack.shift();
//             } else {
//                 return false;
//             }
//         }
        
//         if (paren === "{") {
//             stack.unshift(paren);
//         }
        
//         if (paren === "}") {
//             if (stack[0] === "{") {
//                 stack.shift();
//             } else {
//                 return false;
//             }
//         }
//         console.log(stack)
//     })
//     return stack.length===0
// };
