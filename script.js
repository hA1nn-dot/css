var guessingNumber = Math.trunc(Math.random() * 20) + 1;
var score = 20;
updateScore();
// var turns = document.querySelector("");
document
  .querySelector(".grid-input-number__button")
  .addEventListener("click", () => {
    let number = Number(document.querySelector(".number__input").value);

    console.log(number, typeof number);
    if (!number) {
      document.querySelector(".message").textContent = "It's not a number! xc";
      return;
    }

    if (number === guessingNumber) {
      document.querySelector(".numberValue").textContent = guessingNumber;
      document.querySelector(".message").textContent = "Correct Number!";
    } else if (guessingNumber > number) {
      document.querySelector(".message").textContent =
        "It's greater than " + number;
      score--;
    } else {
      document.querySelector(".message").textContent =
        "It's less than " + number + ";)";
      score--;
    }
    updateScore();
  });

function updateScore() {
  document.querySelector(".score_text").textContent = score;
}
