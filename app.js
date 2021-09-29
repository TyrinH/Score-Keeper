const p1Value = document.querySelector('#p1Value')
const p2Value = document.querySelector('#p2Value')
const p1Button = document.querySelector('#p1Button')
const p2Button = document.querySelector('#p2Button')
let p1Score = 0;
let p2Score = 0;

p1Button.addEventListener('click', function() {
    p1Score += 1;
    p1Value.textContent = p1Score;
})

p2Button.addEventListener('click', function() {
    p2Score += 1;
    p2Value.textContent = p2Score;
})

