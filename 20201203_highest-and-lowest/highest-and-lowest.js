//Highest and Lowest


function highAndLow(numbers) {
    console.log("numbers: " + numbers);
    var array = numbers.split(" ")
        .map(function (item, index) {
            return item = parseInt(item);
        })
        .sort();
    console.log("sorted array: " + array);

}



// Test.assertEquals(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");
