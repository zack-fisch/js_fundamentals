// Exercises: if/else statements
// ALSO KNOWN AS THE SWITCH ASSIGNMENT - Zack

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

var greaterNum = function (num1, num2) {
	switch(true){
		case num1 > num2:
			console.log(num1);
			break;
		case num2 > num1:
			console.log(num2);
			break;
		case num2 === num1:
			console.log(num1);
			break;
		default:
			console.log('Enter a proper number!');
			break;
	}
}

// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

var helloWorld = function(lang) {
	switch(lang) {
		case ('en'):
			alert('Hello, World');
			break;
		case ('hb'):
			alert('Shalom Hahohlahm');
			break;
		case ('fr'):
			alert('Bonjour Monde');
			break;
		default:
			alert('Hello, World');
			break;
	}
}

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

var assignGrade = function(grade){

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

};


// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

var pluralize = function(noun, number) {
	switch(true) {
		case (number === 1):
			console.log(number + ' ' + noun);
			break;
		case (number > 1):
			if (noun === 'sheep' || noun === 'geese') {
				console.log(number + ' ' + noun);
			}else {
			console.log(number + ' ' + noun + 's' );
			}
			break;
		case (number === 0 || number < 0):
			alert("You're being a silly person.")
			break;
	}
}



