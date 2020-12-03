function duplicateEncode(word) {

  // String to lowercase
  var string = word.toLowerCase();

  // Initialize new empty array in global environment
  var newString = "";

  //Outer loop, loops trough the string
  for (var i = 0; i < string.length; i++) {

    // Sets up a counter, that resets for each character.
    var counter = 0;

    // Changes name of current character, for readability.
    var currentChar = string[i];

    // Inner loop, loops trough the string
    //checks if current character matches any of the other ones
    for (var j = 0; j < string.length; j++) {

      if (currentChar === string[j]) {
        // increases the counter when currentChar gets a match in the string
        counter++;
      }
    }

    // If character appears > 2 times, push ) to newstring
    if (counter >= 2) {
      newString += ")";
    }

    // If character appears < 2 times, push ( to newstring
    else {
      newString += "(";
    }
  }
  // Function returns new string with ()(()()) values.
  return newString;
}
