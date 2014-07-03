// Exercises: for loops

// EXERCISE: The even/odd reporter

// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for (var i = 0; i < 21; i++) {
	if (i % 2 === 0 && i !== 0) {
		console.log(i + ' is even');
	}
	else {
		console.log(i + ' is not even');
	}
}
// EXERCISE: Multiplication Tables

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

for (var j = 0; j < 11; j++) {
	console.log('Current number * 9 is: ' + j * 9);
	for (var k = 0; k < 11; k++) {
		console.log('Multiplication table for current number: ' + j * k)
	}
}

// EXERCISE: The Grade Assigner

// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

// Doing this exercise before  conditionals assignment, doing it a bit differently!

var grade = prompt('What is your grade?');

switch (true) {
	case (grade <= 50):
		console.log('You fail');
		break;
	case (grade > 50 && grade <= 65):
		console.log('You get a D');
		break;
	case (grade > 65 && grade <= 75):
		console.log('You get a C');
		break;
	case (grade > 65 && grade <= 85):
		console.log('You get a B');
		break;
	case (grade > 85 && grade <= 100):
		console.log('You get a A');
		break;
	default:
		cosole.log('Enter a proper grade!')
		break;
};




