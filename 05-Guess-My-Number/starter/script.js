'use strict';

//let guess = Number(document.querySelector('.guess').value);

let  randomNumber = Math.trunc(Math.random() * 20) + 1;

let guess
//guess = randomNumber;


let score = 20


document.querySelector('.check').addEventListener("click", function(){
    guess = Number(document.querySelector('.guess').value);
    
    if(!guess){
        document.querySelector('.message').textContent = 'input a valid number';
    }
    else if(guess === randomNumber){
        document.querySelector('.message').textContent = 'Correct Number';
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = guess;
        document.querySelector('.highscore').textContent = score;

    }else if (guess > randomNumber){
        if (score > 1){
            document.querySelector('.message').textContent = 'too high';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'You lost the Game';
            document.querySelector('.score').textContent = 0;
        }            
    }
    else if (guess < randomNumber)
        {
        if (score > 1){
            document.querySelector('.message').textContent = 'too low';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'You lost the Game';
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener("click", function(){
    score = 20;
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.number').textContent = "?";
    document.querySelector('.highscore').textContent = 0;
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = 0;
    document.querySelector('.guess').value = "";
});




// document.querySelector('.check').addEventListener('click', function (){
    
//     if (guess < randomNumber){
//         document.querySelector('.message').textContent = 'Too Low';
//         let score = document.querySelector('.score').value;
//         score--;
//     }
//     else if(guess > randomNumber){
//         document.querySelector('.message').textContent = 'Too high';
//         score = document.querySelector('.score').value;
//         score--;
//     }
    
    
    
    
    
    
//     if (guess === randomNumber){
//         document.querySelector('.message').textContent = 'Correct Number';
//         document.querySelector('body').style.backgroundColor = '#60b347'
//     }
// }) = message;
 
