const p1 = {
   score: 0,
   button: document.querySelector('#p1Button'),
   display: document.querySelector('#p1Display')
}

const p2 = {
   score: 0,
   button: document.querySelector('#p2Button'),
   display: document.querySelector('#p2Display')
}

// this function works for either player one or two /
function updateScores(player, opponent){
   if(!isGameOver){ // if the game is still being played //
      player.score += 1;
      if(player.score === winningScore){
         isGameOver = true;
         player.display.classList.add('has-text-success');
         opponent.display.classList.add('has-text-danger');
         player.button.disabled = true;
         opponent.button.disabled = true;
      }
      player.display.textContent = player.score;
   }
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

// keeps track of how high the score goes
let winningScore = 0;
let isGameOver = false;


// Add EventListener to the button for player 1 //
p1.button.addEventListener('click', () => {
   updateScores(p1, p2);
})      

// Add EventListener to the button for player 2 //
p2.button.addEventListener('click', () => {
   updateScores(p2, p1);
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
   for (let p of[p1,p2]){
      p.score = 0;
      p.display.textContent = 0;
      p.display.classList.remove('has-text-success', 'has-text-danger');
      p.button.disabled = false;
   }
}