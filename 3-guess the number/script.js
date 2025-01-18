let randomNumber = Math.floor(Math.random() * 100 + 1);
let tries = 10;
let triesTaken = 0;

function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;
  let resultMessage = document.querySelector(".final-output");

  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  if (guess === "" || isNaN(guess) || guess < 1 || guess > 100) {
    resultMessage.textContent = "Please enter a number between 1 and 100";
    return;
  }
  guess = parseInt(guess);
  triesTaken++;
  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)

  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
  if (guess > randomNumber) {
    resultMessage.textContent = "Number is too high, try again.";
  } else if (guess < randomNumber) {
    resultMessage.textContent = "Number is too low, try again.";
  }
  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
  else if (guess === randomNumber) {
    resultMessage.textContent = `Guess is correct. You win! The number was ${randomNumber}. It took you ${triesTaken} tries.`;
  }

  if (triesTaken >= tries && guess !== randomNumber) {
    resultMessage.textContent = `You Lose! The number was ${randomNumber}.`;
  }
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  //Reset randomNumber
  randomNumber = Math.floor(Math.random() * 100) + 1;

  //Reset users input field
  document.querySelector(".inputs-Values").value = "";

  //Reset tries, and triesTaken by the user
  tries = 10;
  triesTaken = 0;
  document.querySelector(".final-output").textContent =
    "Please enter a number between 1 and 100";
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.querySelector(".btnNewGame").addEventListener("click", newGame);
