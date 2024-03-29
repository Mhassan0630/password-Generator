var characterLength = 8;
var choiceArr = [];

var specialCharArr = ['!', '@', '#', '$', '%', '^', '&', '*','(',')','[',']','{','}','|','?','/','<','>'];
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var numberArr = ['1','2','3','4','5','6','7','8','9','0',];

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var correctPrompts = getPrompts();  //either true or false
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
      var newPassword = generatePassword();
      passwordText.value = newPassword;
    } else {
      passwordText.value = "";
    }
}

function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
      var randomIndex = Math.floor(Math.random() * choiceArr.length);
      password = password + choiceArr[randomIndex];
  }
  return password;
}

function getPrompts(){
  choiceArr = [];
  characterLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters")); //NaN

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {  
  alert("character length has to be a number, 8 - 128 digits. Please try again.");
  return false;
}

if (confirm("Would you like lowercase letters in your password?")) {
  choiceArr = choiceArr.concat(lowerCaseArr);
}
if (confirm("Would you like uppercase letters in your password?")) {
  choiceArr = choiceArr.concat(upperCaseArr);
}
if (confirm("Would you like special characters in your password?")) {
  choiceArr = choiceArr.concat(specialCharArr);
}
if (confirm("Would you like numbers in your password?")) {
  choiceArr = choiceArr.concat(numberArr);
}

if(choiceArr.length === 0){
  alert("At least one character type should be selected. Please try again.");
  return false;
}

return true;
}
