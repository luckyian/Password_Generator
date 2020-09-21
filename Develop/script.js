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
function generatePassword () {

// Prompt and confirms to get user input used in code.

var characterConfirm = false;

// While statement to make sure that user chooses a character type(s) for the password.
while (characterConfirm === false) {

var numberLength = prompt("How many characters do you want in the password?  Must be between 8 and 128. ");

var passLength = parseInt(numberLength);

var confirmAlphaLower = confirm("Do you want lower case letters in the password?");

var confirmAlphaUpper = confirm("Do you want upper case letters in the password?");

var confirmSymbol  = confirm("Do you want symbols in the password?");

var confirmNumber = confirm("Do you want numbers in the password?");

if (confirmAlphaLower === false && confirmAlphaUpper === false && confirmSymbol === false && confirmNumber === false) {
  alert("You must confirm at least one character type to be included in your password");
}
else {

    characterConfirm = true;
   }
// Set of code to return to user their selections before displaying generated password.
}
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
   
// Sets of variable arrays with characters for the password divided by character type.

var alphaLower=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var alphaUpper=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var symbol=["/","!","@","#","$","%","&","*","(",")","+",",",".","?"];

var number = [0,1,2,3,4,5,6,7,8,9];

// Variable to store characters selected for password.

var finalPass=[]

// If and if else statements to use input from user to generate password based on selections in confirms.

  if(confirmAlphaLower && confirmAlphaUpper && confirmSymbol && confirmNumber){
    for (var i = 0; i < passLength; i++) {
      
    
    var array1 = [alphaLower, alphaUpper, symbol, number];

    var newRand = array1[Math.floor(Math.random() * array1.length)];
    var newPass = newRand[Math.floor(Math.random() * newRand.length)];
    console.log(newPass);
    finalPass.push(newPass);
  }

  }

  else if (confirmAlphaLower && confirmAlphaUpper && confirmSymbol){ 

    for (var i = 0; i < passLength; i++) {
    var array2 = [alphaLower, alphaUpper, symbol];
    var newRand = array2[Math.floor(Math.random() * array2.length)];
    var newPass = newRand[Math.floor(Math.random() * newRand.length)];
    console.log(newPass);
    finalPass.push(newPass);

  }
  }

  else if(confirmAlphaLower && confirmSymbol && confirmNumber){

    for (var i = 0; i < passLength; i++) {
    var array3 = [alphaLower, symbol, number];
    var newRand = array3[Math.floor(Math.random() * array3.length)];
    var newPass = newRand[Math.floor(Math.random() * newRand.length)];
    console.log(newPass);
    finalPass.push(newPass);
  }

  }

  else if(confirmAlphaUpper && confirmSymbol && confirmNumber){
    for (var i = 0; i < passLength; i++) {
    var array4 = [alphaUpper, symbol, number];
    var newRand = array4[Math.floor(Math.random() * array4.length)];
    var newPass = newRand[Math.floor(Math.random() * newRand.length)];
    console.log(newPass);
    finalPass.push(newPass);
  }

  }

  else if(confirmAlphaLower && confirmAlphaUpper && confirmNumber){
    for (var i = 0; i < passLength; i++) {
    var array5 = [alphaLower, alphaUpper, number];
    var newRand = array5[Math.floor(Math.random() * array5.length)];
    var newPass = newRand[Math.floor(Math.random() * newRand.length)];
    console.log(newPass);
    finalPass.push(newPass);
  }

  }


  else if(confirmAlphaLower && confirmAlphaUpper){
    for (var i = 0; i < passLength; i++) {
    var array6 = [alphaLower, alphaUpper];
    var newRand = array6[Math.floor(Math.random() * array6.length)];
    var newPass = newRand[Math.floor(Math.random() * newRand.length)];
    console.log(newPass);
    finalPass.push(newPass);
  }
      

  }

  else if(confirmSymbol && confirmNumber){
    for (var i = 0; i < passLength; i++) {
    var array7 = [symbol, number];
    var newRand = array7[Math.floor(Math.random() * array7.length)];
    var newPass = newRand[Math.floor(Math.random() * newRand.length)];
    console.log(newPass);
    finalPass.push(newPass);
  }
  
  
  }
  
  
  else if(confirmAlphaLower && confirmNumber){
    for (var i = 0; i < passLength; i++) {
    var array8 = [alphaLower, number];
    var newRand = array8[Math.floor(Math.random() * array8.length)];
    var newPass = newRand[Math.floor(Math.random() * newRand.length)];
    console.log(newPass);
    finalPass.push(newPass);
  }


  }

  else if(confirmAlphaUpper && confirmNumber){
    for (var i = 0; i < passLength; i++) {
    var array9 = [alphaUpper, number];
    var newRand = array9[Math.floor(Math.random() * array9.length)];
    var newPass = newRand[Math.floor(Math.random() * newRand.length)];
    console.log(newPass);
    finalPass.push(newPass);
  }

  }
  else if(confirmAlphaLower && confirmSymbol){
    for (var i = 0; i < passLength; i++) {
    var array10 = [alphaLower, symbol];
    var newRand = array10[Math.floor(Math.random() * array10.length)];
    var newPass = newRand[Math.floor(Math.random() * newRand.length)];
    console.log(newPass);
    finalPass.push(newPass);
  }

  }
  else if(confirmAlphaUpper && confirmSymbol){
    for (var i = 0; i < passLength; i++) {
    var array11 = [alphaUpper, symbol];
    var newRand = array11[Math.floor(Math.random() * array11.length)];
    var newPass = newRand[Math.floor(Math.random() * newRand.length)];
    console.log(newPass);
    finalPass.push(newPass);
  }

  }

  else if(confirmNumber){
    for (var i = 0; i < passLength; i++) {
      
      var newPass = number[Math.floor(Math.random() * number.length)]
      finalPass.push(newPass);

    }
  }

  else if(confirmSymbol){
    for (var i = 0; i < passLength; i++) {
      var newPass = symbol[Math.floor(Math.random() * symbol.length)]
      finalPass.push(newPass)
    }
  }

  else if(confirmAlphaUpper){
    for (var i = 0; i < passLength; i++) {
      var newPass = alphaUpper[Math.floor(Math.random() * alphaUpper.length)]
      finalPass.push(newPass)
    }
  }

  else if(confirmAlphaLower){
    for (var i = 0; i < passLength; i++) {
      var newPass = alphaLower[Math.floor(Math.random() * alphaLower.length)]
      finalPass.push(newPass)}

  }
  
  
  console.log(finalPass);
  // Return statement to display new password to user.
  return finalPass.join("");
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