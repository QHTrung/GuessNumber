const againBtn = document.querySelector('.again');
const secretNumEl = document.querySelector('.number');
const guessNumEl = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const highScoreEl = document.querySelector('.highscore');
let secretNumber = Math.trunc(Math.random() * 20) + 1; // random a number from 1 to 20
let score = 20;
let highscore = 0;

checkBtn.addEventListener('click', () => {
  const guessNumber = Number(guessNumEl.value);
  if (!guessNumber) {
    messageEl.textContent = '⛔ No number!';
  } else if (guessNumber === secretNumber) {
    messageEl.textContent = '✅ Correct number!';
    document.body.style.backgroundColor = '#60b347';
    secretNumEl.style.width = '30rem';
    secretNumEl.textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      highScoreEl.textContent = highscore;
    }
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      messageEl.textContent =
        guessNumber > secretNumber ? 'Too high!' : 'Too low!';
      score--;
      scoreEl.textContent = score;
    } else {
      messageEl.textContent = '💥 You lost the game!';
      scoreEl.textContent = 0;
    }
  }
});
againBtn.addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  secretNumEl.textContent = '?';
  document.body.style.backgroundColor = '#222';
  secretNumEl.style.width = '15rem';
  messageEl.textContent = 'Start guessing...';
  score = 20;
  scoreEl.textContent = score;
  guessNumEl.value = '';
});
