// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var childrenNumber = 2;
var partnerName = "Sam";
var locale = "Toronto";
var job = "developer";

console.log('You will be a ' + job + 'in ' + locale + ' and will be married to ' + partnerName + ' with ' + childrenNumber + ' kids' + '.')

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

var year = prompt('What year is it?');
var birthYear = prompt('What year were you born?');

console.log('You are either ' + (year - birthyear) + ' or ' + (year - birthYear - 1));

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var age = 22;
var maxAge = 100;
var amount = 2;
var total = (maxAge - age) * amount;

console.log('You will need ' + total + ' snacks to last you until the old age of ' + maxAge);


// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var radius = 2;
var circumference = 3.1 * (radius * 2);
console.log('The circumference of the circle is approximately: ' + circumference);

var area = 3.14159 * (radius * radius)
console.log('The area of the circle with the radius 2 is approximately: ' + area + ' units squared.')

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celsius = 20;
var toFahrenheit = celsius * 9 / 5 + 32
console.log(celsius + ' degrees celsius ' + ' is ' + toFahrenheit + ' degrees fahrenheit')
var fahrenheit = 20;
var toCelsius = (fahrenheit - 32) * 5 / 9
console.log(fahrenheit + ' degrees fahrenheit ' + ' is ' + toCelsius + ' degrees celsius')



