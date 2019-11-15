//Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. 

function LetterCapitalize(str) { 
    
  let strArray = str.split(' ');
  let finalString = [];
  
  for (let i = 0 ; i < strArray.length ; i++) {
      let currentWord = strArray[i];
      let currentWordUpper = currentWord[0].toUpperCase();
      let finalWord = currentWordUpper + currentWord.substring(1);
      finalString.push(finalWord);
    //   console.log(finalString);
  }
  return finalString.join(' ');
}
