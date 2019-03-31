// // The str parameter will be composed of + and = symbols with several letters between them 
// // (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. 
// // So the string to the left would be false. The string will not be empty and will have at least one letter. 

function SimpleSymbols(str) { 

    let alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    for (let i=0; i < str.length ; i++) {
    
        let curChar = str[i];
        
        // if the character in string includes alpha character
        if (alpha.includes(str[i])) {
    
          // check if alpha character has + on both sides. If yes, store true
          if(str[i-1] === "+" && str[i+1] === "+") {
            let output = true;
    
          // if no, store false and end loop
          } else {
            output = false;
            break;
          }
        }
    }
    return output;
}
