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
      result.style.display = "none";
      resultImg.style.display = "none";
      playersChoice.style.display = "none";
      computersChoice.style.display = "none";
      vsIcon.style.display = "none";
    } else {
      playRound(button.id, getComputerChoice());
    }
  })
})

function playRound(playerSelection, computerSelection) {

  if (gameCount === 0) {
    playersChoice.style.display = "block";
    computersChoice.style.display = "block";
    vsIcon.style.display = "block";
    result.style.display = "block";
    gameCount = 1;
  }

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
  resultImg.style.display = "block";
  if (pWinCount === 3) {
    para.textContent = `You won ${pWinCount}, lost ${cWinCount} games and eventually won!`;
    resultImg.src = "./media/won.gif";
  } else if (cWinCount === 3) {
    para.textContent = `You only won ${pWinCount} games and lost ${cWinCount}, so you lost.`;
    resultImg.src = "./media/lost.gif";
  }

  playerWinCount = 0;
  computerWinCount = 0;
  gameCount = 0; //to make images visible in playRound function
  changeButtonVisibility();
}

function getComputerChoice() {
  let choiceNum = Math.random() * 3;
  let choice;
  if (choiceNum <= 1) {
    choice = "rock";
  } else if (choiceNum <= 2) {
    choice = "paper";
  } else if (choiceNum <= 3) {
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
