const p1Value = document.querySelector('#p1Value')
const p2Value = document.querySelector('#p2Value')
const p1Button = document.querySelector('#p1Button')
const p2Button = document.querySelector('#p2Button')
const winningValue = document.querySelector('#winningValue')
const reset = document.querySelector('#reset')
let p1Score = 0;
let p2Score = 0;
let winningScore = 5;

p1Button.addEventListener('click', function() {

    if(winningScore != p1Score){
    p1Score += 1;
    p1Value.textContent = p1Score;
    }
    else{
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
})

p2Button.addEventListener('click', function() {
    if(winningScore != p2Score){
    p2Score += 1;
    p2Value.textContent = p2Score;
    }
    else{
        p2Button.disabled = true;
        p1Button.disabled = true;
    }
})

winningValue.addEventListener('change', function() {
    winningScore = parseInt(this.value)
    resetGame()

})

reset.addEventListener('click', resetGame), {
}
function resetGame(){
    p1Score = 0;
    p1Value.textContent = 0;
    p2Score = 0;
    p2Value.textContent = 0;
    p1Button.disabled = false;
    p2Button.disabled = false;
}