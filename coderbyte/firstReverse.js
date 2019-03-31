//easy

function FirstReverse(str) { 
    
    let revStr = '';
    
    for (let i = str.length - 1 ; i >= 0 ; i--) {
        revStr += str[i];
    }
    
    return revStr; 
}
   
// keep this function call here 
FirstReverse(readline());
