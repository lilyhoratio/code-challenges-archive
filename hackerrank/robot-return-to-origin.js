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
        "R" :0
    }
    
    moves.split("").forEach(move => { //"U"
        movesCount[move] += 1
    })

    console.log("moves count obj: ", movesCount)
    
    return movesCount["U"] === movesCount["D"] && movesCount["L"] === movesCount["R"] 
};

// console.log(judgeCircle("UD"))