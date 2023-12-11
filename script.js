// Document elements
const password=document.getElementById("password")
const genBtn=document.getElementById("generate")

// characters in password
let upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
let numChars = "0123456789";
let specialChars = "a'+,.-/:;<>=?[]_{}`~!@#$%^&*()";
let finalPassword = '';

//generate password
function passGen() {
  let passLength = promptLength();
  let upperCaseChars = getChoice("uppercase")
  let lowerCaseChars = getChoice("lowercase")
  let numChars = getChoice("numeric")
  let specialChars = getChoice("special")

  let selectCharType = false;
  //selecting atleast 1 character type
  while (selectCharType == false) {
    let lowerCaseChars = getChoice ("lowercase")
    let upperCaseChars = getCHoice ("uppercase")
    let numChars = getChoice("numeric")
    let specialChars = getChoice("special")
  }
}

//prompts

genBtn.onclick = function() {
let length = parseInt(
  prompt('How many characters would you like your password to contain?')
)
}
if (length < 8) {
  alert('Password length must be at least 8 characters');
  return null;
}
if (length > 128) {
  alert('Password length must be less than 129 characters');
  return null;
};

// Variable to store boolean regarding the inclusion of special characters
let useSpecialChars = confirm(
  'Click OK to confirm including special characters.'
);
// Variable to store boolean regarding the inclusion of numbers.
let useNumChars = confirm(
  'Click OK to confirm including numbers.'
);
// Variable to store boolean regarding the inclusion of lowercase characters
let useLowerCaseChars = confirm(
  'Click OK to confirm including lowercase characters.'
);
// Variable to store boolean regarding the inclusion of uppercase characters
let useUpperCaseChars = confirm(
  'Click OK to confirm including uppercase characters.'
);


//useNumChars
for (let i = 0; 1 < == passLength; i++) {
  let randomNum = Math.floor(Math.random() * numChars.length);
  password += numChars.substring(randomNum, randomNum +1);
 }


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

}



function prompts() {
  let lowerCaseChars = confirm("Lowercase?")
}


// Add event listener to generate button
genBtn.addEventListener("click", writePassword);