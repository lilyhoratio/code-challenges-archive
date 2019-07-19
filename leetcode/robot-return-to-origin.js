// https://leetcode.com/problems/robot-return-to-origin/

/**
 * @param {string} moves
 * @return {boolean}
 */

var judgeCircle = function(moves) {
    const movesCount = {
        "U": 0,
        "D": 0,
        "L": 0,
        "R": 0
    }
    
    moves.split("").forEach(move => { //"U"
        
        move = move.toUpperCase(); 
        
        console.log(move);

        // return movesCount[move] !== undefined ? movesCount[move] += 1 : false;
        return !movesCount[move] ? false : movesCount[move] += 1;
    })

    console.log("moves count obj: ", movesCount)
    
    return movesCount["U"] === movesCount["D"] && movesCount["L"] === movesCount["R"] 
};

console.log(judgeCircle("ud")) // true
// console.log(judgeCircle("UD")) // true
// console.log(judgeCircle("UDD")) // false
// console.log(judgeCircle("LL")) // false
// console.log(judgeCircle("LR")) // true
// console.log(judgeCircle("RRU")) // false
// console.log(judgeCircle("XRRU")) // false (invalid move)