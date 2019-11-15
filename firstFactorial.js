// easy

function FirstFactorial(num) { 

  let product = 1;
  
  for (let i = num ; i >= 1; i--) {
    product *= i;
  }
  
  return product; 
         
}
   
// keep this function call here 
FirstFactorial(readline());
