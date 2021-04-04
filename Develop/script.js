var welcome = function() {
  window.alert("Welcome to your random password generator!");
  window.alert("Let's get started with your password preferences.");

  length();
};

var length = function() {
  var characterLength = window.prompt("How many characters would you like your password to be? Please enter a number between 8 and 128.");
  if (characterLength >= 8 && characterLength <= 128) {
    window.alert("Your password will be " + characterLength + " characters long.");
    console.log("Character length " + characterLength);
  } else {
    window.alert("Please try again.");
    length();
  }

  lowercase();
};

var lowercase = function() {
  var lowercasePreference = window.prompt("Would you like to include lowercase letters in your password? Please answer YES or NO.");
  if (lowercasePreference === "" || lowercasePreference === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    lowercase();
  }

  lowercasePreference = lowercasePreference.toLocaleLowerCase();
  if (lowercasePreference === "yes" || lowercasePreference === "no") {
    window.alert("Your preference is noted.");
  } else {
    window.alert("Please enter a valid response.");
  }

  console.log("The lowercase preference is " + lowercasePreference);
  numeric();
};

var numeric = function() {
  var numericPreference = window.prompt("Would you like to include numbers in your password? Please answer YES or NO.");
  if (numericPreference === "" || numericPreference === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    numeric();
  }

  numericPreference = numericPreference.toLocaleLowerCase();
  if (numericPreference === "yes" || numericPreference === "no") {
    window.alert("Your preference is noted.");
  } else {
    window.alert("Please enter a valid response.");
  }

  console.log("The numberic preference is " + numericPreference);
  specialCharacters();
};

var specialCharacters = function() {
  var specialCharactersPreference = window.prompt("Would you like to include special characters in your password? Please answer YES or NO.");
  if (specialCharactersPreference === "" || specialCharactersPreference === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    specialCharacters();
  }

  specialCharactersPreference = specialCharactersPreference.toLocaleLowerCase();
  if (specialCharactersPreference === "yes" || specialCharactersPreference === "no") {
    window.alert("Your preference is noted.");
  } else {
    window.alert("Please enter a valid response.");
  }

  console.log("The special character preference is " + specialCharactersPreference);
};

welcome();