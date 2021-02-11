const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const winningScoreSelect = document.querySelector('#playto');

// keeps track of player One's score //
let p1Score = 0;
// keeps track of player two's score //
let p2Score = 0;
// keeps track of how high the score goes
let winningScore = 5;
let isGameOver = false;


// Add EventListener to the button for player 1 //
p1Button.addEventListener('click', () => {
   if(!isGameOver){ // if the game is still being played //
      // add 1 to player 1's score //
      p1Score += 1;
      // checking score for the win //
      if(p1Score === winningScore){
         isGameOver = true;
         p1Display.classList.add('winner');
         p2Display.classList.add('loser');
      }
      p1Display.textContent = p1Score;
   }
})

// Add EventListener to the button for player 2 //
p2Button.addEventListener('click', () => {
   if(!isGameOver){ // if the game is still being played //
      // add 1 to player 2's score //
      p2Score += 1;
      // checking score for the win //
      if(p2Score === winningScore){
         isGameOver = true;
         p2Display.classList.add('winner');
         p1Display.classList.add('loser');
      }
      p2Display.textContent = p2Score;
   }
})

// add event listener to winningScoreSelect to listen for a change event //
winningScoreSelect.addEventListener('change', function () {
   winningScore = parseInt(this.value);
   reset();
})

// Add EventListener to reset button to reset the score when clicked //
resetButton.addEventListener('click', reset);

function reset () {
   isGameOver = false;
   p1Score = 0;
   p2Score = 0;
   p1Display.textContent = 0;
   p2Display.textContent = 0;
   p1Display.classList.remove('winner', 'loser');
   p2Display.classList.remove('winner', 'loser');
}