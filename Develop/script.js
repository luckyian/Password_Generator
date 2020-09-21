///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's



var alphaLower=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var alphaUpper=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var symbol=["/","!","@","#","$","%","&","*","(",")","+",",",".","?"];

var number=Math.floor(Math.random() * 10);

var character=[alpha, symbol, number];

var characterChoice = character[Math.floor(Math.random() * character.length)]

// var countDown = numberLength(arr) {

  // We then loop through the selected array.
  // for (var i = 0; i < arr.length; i++) {

    // Each time we print the value inside the array.
    // console.log(arr[i]);
  // }
  // console.log("---------");
// }

function generatePassword () {

  if( countDown > 0){
  


  if(confirmAlphaLower){ 
    var alphaChoice = alphaLower[Math.floor(Math.random() * alpha.length)];


  }

  if(confirmSymbol){
    var symbolChoice = symbol[Math.floor(Math.random() * symbol.length)];

  }

  if(confirmNumber){
   var numberChoice = number;
  
  }
}




}


///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////
var numberLength = prompt("How many characters do you want in the password?");

var confirmAlphaLower = confirm("Do you want letters in the password?");

var confirmAlphaUpper = confirm("Do you want uppercase letters in the password?")

var confirmSymbol = confirm("Do you want symbols in the password?");

var confirmNumber = confirm("Do you want numbers in the password?");