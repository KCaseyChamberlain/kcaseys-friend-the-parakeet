// Targets the HTML IDs
var lowercaseElement = document.querySelector("#lowercase");
var uppercaseElement = document.querySelector("#uppercase");
var numbersElement = document.querySelector("#numbers");
var symbolsElement = document.querySelector("#symbols");
var lengthElement = document.querySelector("#passlength");
var passwordBox = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
var hiddenElement = document.querySelector("#hidden-criteria");
var criteriaButton = document.getElementById("unhide");
var hiddenCriteria = document.getElementById("hidden-criteria");


// Hides cirteriaButton and shows hiddenCriteria
function showHiddenCriteria() {
hiddenCriteria.style.display = "block";
criteriaButton.style.display = "none";
}

// Function that places password in password box.
function generatePassword(){
var length = returnLength();
var newPassword = "";
  for(var i = 0; i < length; i++) {
  newPassword += randomize();
  }
passwordBox.value = newPassword;
}

// Randomizer
function randomize(){
  var criteriaArray = [];

  if(uppercaseElement.checked){
    criteriaArray.push(returnUppercase);
  }

  if(lowercaseElement.checked){
    criteriaArray.push(returnLowercase);
  }

  if(numbersElement.checked){
    criteriaArray.push(returnNumbers);
  }

  if(symbolsElement.checked){
    criteriaArray.push(returnSymbols)
  }

  console.log(criteriaArray)
    var randomCharacter = criteriaArray[Math.floor(Math.random()*criteriaArray.length)];
    return randomCharacter.call();
  }



// Start of selectable criteria functions
function returnLowercase() {
var lower = 'abcdefghijklmnopqrstuvwxyz';
var lowerCharacter = lower[Math.floor(Math.random()*lower.length)];
return lowerCharacter;
}

function returnUppercase() {
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperCharacter = upper[Math.floor(Math.random()*upper.length)];
return upperCharacter;
}

function returnNumbers() {
var number = "0123456789";
var numberCharacter = number[Math.floor(Math.random()*number.length)];
return numberCharacter;
}

function returnSymbols() {
var symbol = "!@#$%^&*()?";
var symbolCharacter = symbol[Math.floor(Math.random()*symbol.length)];
return symbolCharacter;
}



function returnLength() {
var length = lengthElement.value;
return length;
}



criteriaButton.addEventListener("click", showHiddenCriteria);
generateBtn.addEventListener("click", generatePassword);