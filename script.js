var guessingNumber = Math.trunc(Math.random() * 20) + 1;
var score = 20;
var highscore = 0;
updateScore();

document
  .querySelector(".grid-input-number__button")
  .addEventListener("click", () => {
    let number = Number(document.querySelector(".number__input").value);

    if (!number) {
      showMessage("It's not a number! xc");
      return;
    }

    if (number === guessingNumber) {
      showMessage("Correct Number!");
      updateHighScore();
      document.querySelector(".numberValue").textContent = guessingNumber;
      document.querySelector(".body").classList.add("win");
    } else {
      showMessage(
        guessingNumber > number
          ? "It's greater than " + number
          : "It's less than " + number + " ;)"
      );
      score--;
    }

    updateScore();
    if (isPlayerLost()) {
      showMessage("You lost the game :c");
      document.querySelector(".numberValue").textContent = guessingNumber;
    }
  });
document
  .querySelector(".header-button__retry")
  .addEventListener("click", () => {
    score = 20;
    showMessage("Start guessing...");
    guessingNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector("body").classList.remove("win");
    document.querySelector(".numberValue").textContent = "?";
    document.querySelector(".score_text").textContent = "20";
  });

function updateHighScore() {
  if (score > highscore) {
    highscore = score;
    document.querySelector(".highscore").textContent = highscore;
  }
}

function updateScore() {
  document.querySelector(".score_text").textContent = score;
}

function showMessage(message) {
  document.querySelector(".message").textContent = message;
}

function isPlayerLost() {
  if (score <= 0) return true;
  return false;
}
