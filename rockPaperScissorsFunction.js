// rockPaperScissors.js

// Get the player's move from process.argv
const playerMove = process.argv[2];

// Possible moves
const moves = ['rock', 'paper', 'scissors'];

// Function to randomly generate the computer's move
function getComputerMove() {
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
}

// Function to determine the winner
function determineWinner(player, computer) {
  if (player === computer) {
    return "It's a draw!";
  }

  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'scissors' && computer === 'paper') ||
    (player === 'paper' && computer === 'rock')
  ) {
    return 'You win!';
  }

  return 'You lose!';
}

// Check if the player's input is valid
if (!moves.includes(playerMove)) {
  console.log("Invalid move! Please choose 'rock', 'paper', or 'scissors'.");
} else {
  // Generate the computer's move
  const computerMove = getComputerMove();

  // Output the moves
  console.log(`You chose ${playerMove}. Computer chose ${computerMove}.`);

  // Determine and output the result
  const result = determineWinner(playerMove, computerMove);
  console.log(result);
}