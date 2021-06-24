

var charSpecial = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".",];
// // Array of numeric characters to be included in password

var charNumeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// // Array of lowercase characters to be included in password

var charLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

// Array of uppercase characters to be included in password
var charUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];


//create function to grab user input
//create function to randomize array
//create function that generates password based on user input and randomization 
function randomShuffle(array) {

//grabs random index from chosen array
var grabRandInt = Math.floor(Math.random() * array.length);
var indexValue = array[grabRandInt]; 
return indexValue;
}

function userInput() {
// length of password must be between 8 and 128 characters
var charPassword = prompt("How many characters would you like your password to have?");
 
//checks if password letter is between 8 and 128 characters 
if(charPassword < 8 || charPassword > 128) { 
    alert("Your password must be between 8 and 128 characters") + 
    confirm("Please enter a number between 8 and 128:") + 
    prompt("How many characters would you like your password to have?")
    }

console.log(charPassword);
// confirms that special characters are in password

var hasSpecialChar = confirm("Click Ok to confirm special characters in your password.");
console.log(hasSpecialChar);

//confirms that numeric characters in your password
var hasNumChar = confirm("Click Ok to confirm numeric characters in your password.");
console.log(hasNumChar);

//confirms uppercase characters in your password
var hasUpperChar = confirm("Click Ok to confirm uppercase characters in your password.");
console.log(hasUpperChar);

var hasLowerChar = confirm("Click Ok to confirm lowercase characters in your password.");
console.log(hasLowerChar);

var inputValue = {
    inputLength: charPassword, 
    inputSpecialChar: hasSpecialChar,
    inputNumChar: hasNumChar,
    inputLowerChar: hasLowerChar,
    inputUpperChar: hasUpperChar,
}

console.log(inputValue);
return inputValue;
}

function generatePassword() {
var grabUserInput = userInput();
var newRandPass = []
var possibleChar = []

if(grabUserInput.inputLowerChar === true) {
    possibleChar = possibleChar.concat(charLowercase);
    possibleChar.push(randomShuffle(charLowercase));
}

if(grabUserInput.inputUpperChar === true) {
    possibleChar = possibleChar.concat(charUppercase);
    possibleChar.push(randomShuffle(charUppercase));
}
if(grabUserInput.inputNumChar === true) {
    possibleChar = possibleChar.concat(charNumeric);
    possibleChar.push(randomShuffle(charNumeric));
}
if(grabUserInput.inputLowerChar === true) {
    possibleChar = possibleChar.concat(charSpecial);
    possibleChar.push(randomShuffle(charSpecial));
}

for (let i = 0; i < grabUserInput.inputLength; i++) {
var stagedPass = randomShuffle(possibleChar); 
newRandPass.push(stagedPass)
}
console.log(newRandPass);
return newRandPass.join("");
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


