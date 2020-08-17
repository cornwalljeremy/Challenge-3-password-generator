var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"];
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericalArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacterArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "|", "[", "]", ";", "'", ":", "<", ">", "?", "/", " "];

// Assignment code here
// 

// Character Length
function generatePassword() {
    var passwordLength = window.prompt("How many characters? between 8 and 128");
    if (passwordLength < 8 || passwordLength > 128) {
        window.alert("Please enter a value between 8 and 128");
        lengthPrompt()
    }
    return characterPrompt(passwordLength)
}
function characterPrompt(passwordLength) {
    // Create array here 
    var guaranteedArray = []
    var possibleArray = []
    var resultArray = []

    // Array of Uppercase
    var upperCase = confirm("Is Uppercase ok? Yes or No");
    if (upperCase === true) {
        guaranteedArray.push(random(upperArray));
        possibleArray = possibleArray.concat(upperArray)
    }
    // Array of lowercase
    var lowerCase = confirm("Is Lower case ok? Yes or No");
    if (lowerCase === true) {
        guaranteedArray.push(random(lowerArray));
        possibleArray = possibleArray.concat(lowerArray);
    }
    //Array of numbers
    var numerical = confirm(" Are Numbers ok? Yes or No")
    if (numerical === true) {
        guaranteedArray.push(random(numericalArray));
        possibleArray = possibleArray.concat(numericalArray);
    }
    //Array of special characters
    var specialCharacter = confirm("Are Special Characters ok? Yes or No")
    if (specialCharacter === true) {
        guaranteedArray.push(random(specialCharacterArray));
        possibleArray = possibleArray.concat(specialCharacterArray);
    }
    //it has to have at least one of these
    if (upperCase === false && lowerCase === false && numerical === false && specialCharacter === false) {
        window.alert("Please enter at least one value");
        characterPrompt(passwordLength);
        // console.log(resultArray)
    }
    for (i = 0; i < passwordLength; i++) {
        resultArray.push(random(possibleArray));
    }
    for (var i = 0; i < guaranteedArray.length; i++) {
        resultArray[i] = guaranteedArray[i];
    }
    // console.log(resultArray.join(""))
    return resultArray.join("")
}
// if (upperCase === false && lowerCase === false && numerical === false && specialCharacter === false) {
//     window.alert("Please enter at least one value");
//     characterPrompt(passwordLength);
// }
//nuts and bolts of the operation
function random(array) {
    var index = Math.floor(Math.random() * array.length);
    var element = array[index]
    return element;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

