//import inquirer from inquirer
import inquirer from "inquirer";

// Generate a random number between 1 and 10
const GeneratedNo = Math.floor(Math.random() * 10) + 1;

// Prompt the user to enter their guess
const { userGuess }: { userGuess: number } = await inquirer.prompt({
    type: "number",
    name: "userGuess",
    message: "Guess the number (between 1 and 10):"
});
// Confirm if the user's guess matches the randomly generated number by the system
if (userGuess === GeneratedNo) {
    console.log("Congratulations! You guessed it right.");
} else {
    console.log(`Oops! The correct number was ${GeneratedNo}. try again!`);

}
