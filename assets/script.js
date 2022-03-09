
var passwordLength = 8
var choiceChars = []

var specialChars = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~',];
var lowerCaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var generateBtn = document.querySelector("#generate");

// Assignment Code


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  // putting promptInfo function into this function but only if it has worked //
  var promptWorked = promptInfo();
  var passwordText = document.querySelector("#password");

    if (promptWorked) {
      var passwordFinal = generatePassword();
    
      passwordText.value = passwordFinal;
    } else {
      passwordText.value = '';
    }
}

function generatePassword(){
  var password = '';
  for (var i = 0; i < passwordLength; i++) {
    var randomChar = Math.floor(Math.random() * choiceChars.length) 
    password = password + choiceChars[randomChar];
  }
  return password;
}



function promptInfo(){
  passwordLength = parseInt(prompt("Choose a password length between 8 and 128 characters!"));
  console.log(passwordLength);

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Please enter a valid password length!");
      return false
  }

  if (confirm("would you like lowercase letters in your password?")) {
    choiceChars = choiceChars.concat(lowerCaseChars);
  }
  
  if (confirm("would you like UPPERCASE LETTERS in your password?")) {
    choiceChars = choiceChars.concat(uppercaseChars);
  }
 
  if (confirm("would you like symbols in your password?")) {
    choiceChars = choiceChars.concat(specialChars);
  }
  
  if (confirm("would you like numbers in your password?")) {
    choiceChars = choiceChars.concat(numberChars);
  }
  return true

}