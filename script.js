let gameCount = 1;
let playerWinCount = 0;
let computerWinCount = 0;

const para = document.querySelector('.info-para');
const result = document.querySelector('.result');
const playersChoice = document.querySelector('.player-img');
const computersChoice = document.querySelector('.computer-img');
const vsIcon = document.querySelector('.vs-img');
const resultImg = document.querySelector('.result-img');
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.className === "play-again") {
      changeButtonVisibility();
      para.textContent = "Choose one:";
      result.textContent = "";
      resultImg.src = "";
      playersChoice.src = "";
      computersChoice.src = "";
      vsIcon.src = "";
    } else {
      playRound(button.id, getComputerChoice());
    }
  })
})

function playRound(playerSelection, computerSelection) {
  resultImg.src = "";

  if (playerSelection === "rock" && computerSelection === "paper") {
    para.textContent = `Game ${gameCount}: You lose! Paper beats Rock`;
    computerWinCount++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    para.textContent = `Game ${gameCount}: You won! Paper beats Rock`;
    playerWinCount++;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    para.textContent = `Game ${gameCount}: You won! Rock beats Scissors`;
    playerWinCount++;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    para.textContent = `Game ${gameCount}: You lose! Rock beats Scissors`;
    computerWinCount++;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    para.textContent = `Game ${gameCount}: You lose! Scissors beats Paper`;
    computerWinCount++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    para.textContent = `Game ${gameCount}: You won! Scissors beats Paper`;
    playerWinCount++;
  } else if (playerSelection === computerSelection) {
    para.textContent = `Game ${gameCount}: You tie! Both sides chose ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
  }

  switch(playerSelection) {
    case "rock":
      playersChoice.src = "./media/rock.png";
      break;
    case "paper":
      playersChoice.src = "./media/paper.png";
      break;
    case "scissors":
      playersChoice.src = "./media/scissor.png";
      break;
    default:
      break;
  }

  vsIcon.src = "./media/vs.png";

  switch(computerSelection) {
    case "rock":
      computersChoice.src = "./media/rock.png";
      break;
    case "paper":
      computersChoice.src = "./media/paper.png";
      break;
    case "scissors":
      computersChoice.src = "./media/scissor.png";
      break;
    default:
      break;
  }
  result.textContent = `${playerWinCount} - ${computerWinCount}`;

  gameCount++;

  if (playerWinCount === 3 || computerWinCount === 3) {
    endGame(playerWinCount, computerWinCount);
  }
   
}

function endGame(pWinCount, cWinCount) {
  if (pWinCount === 3) {
    para.textContent = `You won ${pWinCount}, lost ${cWinCount} games and eventually won!`;
    resultImg.src = "./media/won.gif";
  } else if (cWinCount === 3) {
    para.textContent = `You only won ${pWinCount} games and lost ${cWinCount}, so you lost.`;
    resultImg.src = "./media/lost.gif";
  }

  playerWinCount = 0;
  computerWinCount = 0;
  gameCount = 1;
  changeButtonVisibility();
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

function changeButtonVisibility() {
  buttons.forEach((btn) => {
    if (btn.style.display === "none") {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  })
}
