// generate a random number between 1 and 10
var randomNumber = Math.floor(Math.random() * 10) + 1;

// ask the user to guess the number
var guess = prompt('I am thinking of a number between 1 and 10. What is it?');

// check if guess is right
if (parseInt(guess) === randomNumber) {
    document.write('<p>You guessed the number!</p>');
    } else {
    document.write('<p>Sorry. The number was ' + randomNumber + '.</p>');
    }