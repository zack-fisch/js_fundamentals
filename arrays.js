// Exercises: Arrays

// EXERCISE: Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

var myArray = new Array();
var increment = 0;

myArray.push('Tom Hanks', 'Pierce Brosnan', 'Will Smith', 'Richard Ayoade');

for (var i = 0; i < myArray.length; i++) {
	console.log(myArray[i] + ' is my #' + (i+1) + ' choice.');
};


