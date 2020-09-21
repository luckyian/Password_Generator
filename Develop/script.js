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




function generatePassword () {

  if(confirmAlphaLower && confirmAlphaUpper && confirmSymbol && confirmNumber){
  
    var array1 = [alphaLower, alphaUpper, symbol, number];

    

  }

  else if (confirmAlphaLower && confirmAlphaUpper && confirmSymbol){ 

  }

  else if(confirmAlphaLower && confirmSymbol && confirmNumber){

  }

  else if(confirmAlphaUpper && confirmSymbol && confirmNumber){

  }

  else if(confirmAlphaLower && confirmAlphaUpper && confirmNumber){

  }


  else if(confirmAlphaLower && confirmAlphaUpper){
  

  }

  else if(confirmSymbol && confirmNumber){
  
  
  }
  
  
  else if(confirmAlphaLower && confirmNumber){


  }

  else if(confirmAlphaUpper && confirmNumber){

  }
  else if(confirmAlphaLower && confirmSymbol){

  }
  else if(confirmAlphaUpper && confirmSymbol){

  }

  else if(confirmNumber){

  }

  else if(confirmSymbol){

  }

  else if(confirmAlphaUpper){

  }

  else if(confirmAlphaLower){

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

var numberLength = prompt("How many characters do you want in the password?  Must be between 8 and 128. ");

var passLength = parseInt(numberLength);

var confirmAlphaLower = confirm("Do you want lower case letters in the password?");

var confirmAlphaUpper = confirm("Do you want upper case letters in the password?");

var confirmSymbol  = confirm("Do you want symbols in the password?");

var confirmNumber = confirm("Do you want numbers in the password?");

if(confirmAlphaLower){
  
    var confirmL = " Lower case letters.  "}

  else {
    var confirmL = " "}
  

if(confirmAlphaUpper){
  
    var confirmU =  " Upper case letters.  "}
  
  else{
    var confirmU =  " "}
  
if(confirmSymbol){
  
    var confirmS = " Symbols.  "}
  
  else { 

    var confirmS = " "}

if(confirmNumber){
  
    var confirmN = " Numbers.  "}

  else {
  
    var confirmN = " "
  }

  var confirmAll = alert("You have choosen: " + confirmL + confirmU + confirmS + confirmN + "With a length of " + passLength + ".")