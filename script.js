'use strict';

const chances = 4;
let score = chances;
let highScore = 0;
const secretNumber = Math.trunc(Math.random()*20) + 1;
document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', handleInputNumber);
document.querySelector('body').addEventListener('keydown', handleClickEnter);
document.querySelector('.again').addEventListener('click', handleResetStatesPage);

function handleInputNumber() {
  const guess = Number(document.querySelector('.guess').value);
  if(!guess) document.querySelector('.message').textContent = '⛔️ No number';

  if(secretNumber === guess) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '🍕 Correct Number';
    handleChangeColor('#3dd30c');
    if(score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  if(guess > secretNumber) {
    document.querySelector('.message').textContent = '😙 too high!';
    decreasesScore();
  }

  if(guess < secretNumber && guess > 0) {
    document.querySelector('.message').textContent = '😙 too low!';
    decreasesScore();
  }
};

function handleClickEnter(event) {
  if(event.key === 'Enter') {
    handleInputNumber();
  }
};

function decreasesScore () {
  if(score <= 1) {
    document.querySelector('.message').textContent = '☠️ you lost the game!';
    document.querySelector('.check').setAttribute('disabled', true);
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.score').textContent = 0;
    handleChangeColor('red');
    return;
  };
  score--;
  document.querySelector('.score').textContent = score;
}

function handleResetStatesPage() {
  const color = '#222';
  score = chances;
  secretNumber = Math.trunc(Math.random()*20) + 1;
  document.querySelector('main').style.backgroundColor = color;
  document.querySelector('header').style.backgroundColor = color;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.check').removeAttribute('disabled');
  document.querySelector('.number').textContent = '?'
}

function handleChangeColor(color) {
  document.querySelector('main').style.backgroundColor = color;
  document.querySelector('header').style.backgroundColor = color;
}

