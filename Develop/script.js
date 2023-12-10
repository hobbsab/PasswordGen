// Document elements
const password=document.getElementById("password")
const genBtn=document.getElementById("generate")

// characters in password
let upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
let numChars = "0123456789";
let specialChars = "a'+,.-/:;<>=?[]_{}`~!@#$%^&*()";
let finalPassword = '';

// Add event listener to generate button
genBtn.addEventListener("click", writePassword);

prompt(HI)

//generate password
function passGen() {


  let passLength = promptLength();
  let upperCaseChars = getChoice("uppercase")
  let lowerCaseChars = getChoice("lowercase")
  let numChars = getChoice("numeric")
  let specialChars = getChoice("special")
}


//HELP

function getpassLength () {
  var choiceOne = 0
  while ((choiceOne <8) || (choiceOne > 128)) {
    userChoice = confirm("How long do you want your password to be? Type a number between 8 and 128.");
  }
}
console.log("test")


if
function getlowerCaseChars () {
  var choiceTwo = 1 {
    userChoice = prompt("Do you want lowercase letters?")
  }
}

function getupperCaseChars () {
  var choiceThree = 2 {
    userChoice = prompt("Do you want uppercase letters?")
  }
}

function getspecialChars () {
  var choiceFour = 3 {
    userChoice = prompt("Do you want special characters?")
  }
}

function getnumChars () {
  var choiceFive = 4 {
    userChoice = prompt("Do you want numbers?")
  }
}


console.log("hello")

for (var let i = 0; i <= passLength; i++) {
  let randomNum = Math.floor(Math.random() * numChars.length);
  password += numChars.substring(randomNum, randomNum +1);
 }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  password = randomChars + randomNum;

}

while (charTypeSelect == false) {
  let lowerCaseChars = getChoice ("lowercase")
  let upperCaseChars = getCHoice ("uppercase")
  let numChars = getChoice("numeric")
  let specialChars = getChoice("special")
}

function prompts() {
  let lowerCaseChars = confirm("Lowercase?")
}
