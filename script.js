function game() {
  let playerWinCount = 0, computerWinCount = 0;
  let temp;
  for (let i = 0; i < 5; i++) {
    let temp = playRound(prompt("Your choice(rock, paper or scissors):"), getComputerChoice(), i+1);
    if (temp === 1) {
      playerWinCount++;
    } else if (temp === -1) {
      computerWinCount++;
    } else if (temp === -2){
      i--; //i's value gets decremented by 1 so the loops with improper inputs will be repeated
    }
  }
  if (playerWinCount > computerWinCount) {
    console.log(`FINAL RESULT: You won ${playerWinCount}, lost ${computerWinCount} games and eventually won.`);
  } else if (computerWinCount > playerWinCount) {
    console.log(`FINAL RESULT: You only won ${playerWinCount} games and lost ${computerWinCount}, so you lost.`);
  } else {
    console.log(`FINAL RESULT: You won ${playerWinCount} games and lost ${computerWinCount}, it's a tie.`);
  }
}

function playRound(playerSelection, computerSelection, gameCount) {
  playerSelection = playerSelection.toLowerCase();
  let whoWon; //0 for tie, 1 for win, -1 for lose and -2 for improper inputs
  
  if (playerSelection === "rock" && computerSelection === "paper") {
    console.log(`Game ${gameCount}: You lose! Paper beats Rock`);
    whoWon = -1;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log(`Game ${gameCount}: You won! Paper beats Rock`);
    whoWon = 1;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log(`Game ${gameCount}: You won! Paper beats Scissors`);
    whoWon = 1;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log(`Game ${gameCount}: You lose! Rock beats Scissors`);
    whoWon = -1;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log(`Game ${gameCount}: You lose! Scissors beats Paper`);
    whoWon = -1;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log(`Game ${gameCount}: You won! Scissors beats Paper`);
    whoWon = 1;
  } else if (playerSelection === computerSelection) {
    console.log(`Game ${gameCount}: You tie! Both sides chose ${playerSelection}`);
    whoWon = 0;
  } else {
    console.log("Please enter a valid choice!");
    whoWon = -2
  }

  return whoWon;
}

function getComputerChoice() {
  let choiceNum = Math.random() * 10;
  let choice;
  if (choiceNum <= 3.3) {
    choice = "rock";
  } else if (choiceNum <= 6.6) {
    choice = "paper";
  } else if (choiceNum <= 10) {
    choice = "scissors";
  }

  return choice;
}

game();