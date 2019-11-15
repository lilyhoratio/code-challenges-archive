function accum(s) {
  finalString = "";
  s = s.toLowerCase();
  
  for (i=0; i < s.length ; i++) {
    if (i < s.length - 1) {
      
      subString = s[i].repeat(i+1);
      subStringCap = subString[0].toUpperCase() + subString.substring(1,) + "-";
      finalString = finalString + subStringCap;

    } else {
    
      subString = s[i].repeat(i+1);
      subStringCap = subString[0].toUpperCase() + subString.substring(1,);
      finalString = finalString + subStringCap;
    }
  }
  return finalString;
}
