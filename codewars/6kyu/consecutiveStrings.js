function longestConsec(strarr, k) {
  var longestString = "";
  var n = strarr.length;
  
  if (n=0 || k > n || k <= 0) return longestString;
  
  for (i = 0; i < strarr.length; i++) {
    var currentString = strarr.slice(i, i+k).join("");
    
    if (currentString.length > longestString.length) {
      longestString = currentString;
    }
  }
  
  return longestString;
}
