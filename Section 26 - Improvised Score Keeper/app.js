const p1btn = document.querySelector("#p1btn");
const p2btn = document.querySelector("#p2btn");
const p1score = document.querySelector("#p1score");
const p2score = document.querySelector("#p2score");
const resetBtn = document.querySelector("#reset");
const numSelect = document.querySelector("#numSelect");

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

p1btn.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === winningScore) {
      isGameOver = true;
      p1score.classList.add("winner");
      p2score.classList.add("loser");
    }
    p1score.textContent = p1Score;
  }
});

p2btn.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      isGameOver = true;
      p2score.classList.add("winner");
      p1score.classList.add("loser");
    }
    p2score.textContent = p2Score;
  }
});

resetBtn.addEventListener("click", resetPlay);

numSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  resetPlay();
});

function resetPlay() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1score.textContent = "0";
  p2score.textContent = "0";
  p1score.classList.remove("winner", "loser");
  p2score.classList.remove("winner", "loser");
}
