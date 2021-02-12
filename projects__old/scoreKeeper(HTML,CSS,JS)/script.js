let btnPlayerOne = document.getElementById('btn1'),
    btnPlayerTwo = document.getElementById('btn2'),
    btnReset = document.getElementById('btnReset'),
    p1Display = document.querySelector('#p1Display'),
    p2Display = document.querySelector('#p2Display'),
    numInput = document.querySelector('input'),
    winningScoreDisplay = document.querySelector('p span'),
    p1Score = 0,
    p2Score = 0,
    gameOver = false,
    winningScore = 5;

btnPlayerOne.addEventListener('click', function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            p1Display.classList.add('winner');
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
    
});

btnPlayerTwo.addEventListener('click', function(){
    if(!gameOver){
        p2Score++;
        if (p2Score === winningScore){
            p2Display.classList.add('winner');
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
    
});

btnReset.addEventListener('click', function(){
    reset();
});

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winner');
    p2Display.classList.remove('winner');
    gameOver = false;
}

numInput.addEventListener('change', function(){
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});
    
