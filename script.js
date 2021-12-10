var guessingNumber = Math.trunc(Math.random() * 20) + 1;
var score = 20;
var highscore = 0;
updateScore();
// var turns = document.querySelector("");
document
  .querySelector(".grid-input-number__button")
  .addEventListener("click", () => {
    let number = Number(document.querySelector(".number__input").value);

    if (!number) {
      document.querySelector(".message").textContent = "It's not a number! xc";
      return;
    }

    if (number === guessingNumber) {
      document.querySelector(".numberValue").textContent = guessingNumber;
      score > highscore ? (highscore = score) : (highscore = highscore);
      document.querySelector(".highscore").textContent = highscore;
      document.querySelector(".message").textContent = "Correct Number!";
      document.querySelector(".body").classList.add("win");
    } else if (guessingNumber > number) {
      document.querySelector(".message").textContent =
        "It's greater than " + number;
      score--;
    } else {
      document.querySelector(".message").textContent =
        "It's less than " + number + " ;)";
      score--;
    }

    updateScore();
    if (isPlayerLost()) {
      document.querySelector(".message").textContent = "You lost the game :c";
      document.querySelector(".numberValue").textContent = guessingNumber;
    }
  });
document
  .querySelector(".header-button__retry")
  .addEventListener("click", () => {
    document.querySelector("body").classList.remove("win");
    document.querySelector(".numberValue").textContent = "?";
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score_text").textContent = "20";
    score = 20;
    guessingNumber = Math.trunc(Math.random() * 20) + 1;
  });

function updateScore() {
  document.querySelector(".score_text").textContent = score;
}

function isPlayerLost() {
  if (score <= 0) return true;
  return false;
}
