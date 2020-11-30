function duplicateEncode(word) {
    return word
        // changes string to lowercase
        .toLowerCase()
        // splits string into an array, to access the array methods
        .split('')
        // Creates an array populated with the results of the function
        .map(
            // a = current value(character)
            // i = index, but not being used?
            // w = array (word)
            function(a,i,w){
                // indexOf returns the first index at which a given element can be found in the array.
                // lastIndexOf returns the last index at which a given element can be found in the array.
                return w.indexOf(a) == w.lastIndexOf(a)
                // if the first and last instance of the character is the same, return (
                ?
                '('
                // if the first and the last instance of the caracter is not the same, return )
                :
                ')'
            }
        )
        // Creates and returns a new string by concatenating all of the elements in the array.
        .join('');
}