const optionsToChoose = ["paper", "rock", "scissors"];
const resultOptions = ["you", "draw", "computer"];
let yourChoice = "";
let computerChoice = "";
let whoWon = "";
let numberOfGames = 0;
let numberOfWins = 0;
let numberOfLosts = 0;
let numberOfDraws = 0;
const paperImg = document.querySelector('[data-option="papier"]');
const rockImg = document.querySelector('[data-option="kamień"]');
const scissorsImg = document.querySelector('[data-option="nożyczki"]');

const computerChoiceFun = () => {
  computerChoice =
    optionsToChoose[Math.floor(Math.random() * optionsToChoose.length)];
};

const checkWhoWon = () => {
  if (yourChoice === "paper" && computerChoice === "rock")
    whoWon = resultOptions[0];
  else if (yourChoice === "paper" && computerChoice === "scissors")
    whoWon = resultOptions[2];
  else if (yourChoice === "paper" && computerChoice === "paper")
    whoWon = resultOptions[1];
  else if (yourChoice === "rock" && computerChoice === "paper")
    whoWon = resultOptions[2];
  else if (yourChoice === "rock" && computerChoice === "rock")
    whoWon = resultOptions[1];
  else if (yourChoice === "rock" && computerChoice === "scissors")
    whoWon = resultOptions[0];
  else if (yourChoice === "scissors" && computerChoice === "paper")
    whoWon = resultOptions[0];
  else if (yourChoice === "scissors" && computerChoice === "rock")
    whoWon = resultOptions[2];
  else if (yourChoice === "scissors" && computerChoice === "scissors")
    whoWon = resultOptions[1];
};

const updateInformation = () => {
  document.querySelector('[data-summary="your-choice"]').textContent =
    yourChoice;
  document.querySelector('[data-summary="ai-choice"]').textContent =
    computerChoice;
  document.querySelector('[data-summary="who-win"]').textContent = whoWon;

  document.querySelector(".numbers").textContent = ++numberOfGames;

  switch (whoWon) {
    case resultOptions[0]:
      document.querySelector(".wins").textContent = ++numberOfWins;
      break;
    case resultOptions[1]:
      document.querySelector(".draws").textContent = ++numberOfDraws;
      break;
    case resultOptions[2]:
      document.querySelector(".losses").textContent = ++numberOfLosts;
      break;
  }
};

paperImg.addEventListener("click", function () {
  yourChoice = "paper";
  this.style.border = "2px solid black";
  rockImg.style.border = "";
  scissorsImg.style.border = "";
});

rockImg.addEventListener("click", function () {
  yourChoice = "rock";
  this.style.border = "2px solid black";
  paperImg.style.border = "";
  scissorsImg.style.border = "";
});

scissorsImg.addEventListener("click", function () {
  yourChoice = "scissors";
  this.style.border = "2px solid black";
  paperImg.style.border = "";
  rockImg.style.border = "";
});

document.querySelector("button").addEventListener("click", () => {
  computerChoiceFun();
  checkWhoWon();
  updateInformation();
});
