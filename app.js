let player = {
    value: document.querySelector('#p1Value'),
    button: document.querySelector('#p1Button'),
    score: 0,
}

let opponent = {
    value: document.querySelector('#p2Value'),
    button: document.querySelector('#p2Button'),
    score: 0,
}
//const p1Value = document.querySelector('#p1Value')
//const p2Value = document.querySelector('#p2Value')
//const p1Button = document.querySelector('#p1Button')
//const p2Button = document.querySelector('#p2Button')
//const winningValue = document.querySelector('#winningValue')
//const reset = document.querySelector('#reset')
//let p1Score = 0;
//let p2Score = 0;
let winningScore = 5;

player.button.addEventListener('click', function() {

    if(winningScore != player.score){
    player.score += 1;
    player.value.textContent = player.score;
    }
    else{
        player.button.disabled = true;
        opponent.button.disabled = true;
    }
})

opponent.button.addEventListener('click', function() {
    if(winningScore != opponent.score){
    opponent.score += 1;
    opponent.value.textContent = opponent.score;
    }
    else{
        opponent.button.disabled = true;
        player.button.disabled = true;
    }
})

winningValue.addEventListener('change', function() {
    winningScore = parseInt(this.value)
    resetGame()

})

reset.addEventListener('click', resetGame), {
}
function resetGame(){
    player.score = 0;
    player.value.textContent = 0;
    opponent.score = 0;
    opponent.value.textContent = 0;
    player.button.disabled = false;
    opponent.button.disabled = false;
}