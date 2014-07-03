// Exercises: Objects

// EXERCISE: The Recipe Card

// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa


var recipe = {};
recipe.information = ['Mole', 'Serves: 2', 'cinammon', 'cumin', 'cocoa'];

for (var i = 0; i < recipe.information.length; i++) {
	console.log(recipe.information[i]);
}



// EXERCISE: The Reading List

// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

var Book = function(title, author, alreadyRead){
	this.title = title;
	this.author = author;
	this.alreadyRead = alreadyRead;
}

var arr = [];

arr.push(new Book('The Hobbit', 'J.R.R Tolkien', false));
arr.push(new Book('Things a Little Bird told Me', 'Biz Stone', true));
arr.push(new Book('The Lean Startup', 'Eric Ries', true));

for (var i = 0; i < arr.length; i++) {
	if (arr[i].alreadyRead === true) {
		console.log('You already read ' + arr[i].title + ' by ' + arr[i].author);
	}else {
		console.log('You still need to read ' + arr[i].title + ' by ' + arr[i].author)
	}
};

// EXERCISE: The Movie Database

// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

var Movie = function(title, duration, stars) {
	this.title = title;
	this.duration = duration;
	this.stars = stars;
}

var mov = new Movie('Gladiator', '200', ['Russell Crow', 'Joaqim Pheonix']);

var print = function() {
	console.log(mov.title + " lasts for " + mov.duration + " minutes. Stars: " + mov.stars)
}


