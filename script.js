'use strict';

let secNum = Math.trunc(Math.random()*20 + 1);
let score = 20;
let highScore = 0;

document.querySelector('.again').addEventListener('click' , function (){
    secNum = Math.trunc(Math.random()*20 + 1);
    score = 20;
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '12rem'

})

document.querySelector('.check').addEventListener('click', function(){
    let guess = Number(document.querySelector('.guess').value);
    let valid = false ;
    if(guess >= 1 && guess <=20) valid = true; 

    if(!guess){
        console.log(document.querySelector('.message').textContent)
        document.querySelector('.message').textContent = '🙄 Enter a number to guess...';
    }
    else if(guess === secNum && score !== 0 && valid){
        document.querySelector('.message').textContent = '😎 You guessed it right !!!';
        score = document.querySelector('.score').textContent;
        if (highScore < score) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = guess;
        document.querySelector('.number').style.width = '30rem' 

    }
    else if(guess > secNum && score !== 0 & valid){
        document.querySelector('.message').textContent = '😂 Guessed number is too high...';
        if(score > 1){
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            score = 0
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent = '🤣 You lost the game. Try again...';
            document.querySelector('body').style.backgroundColor = '#E9967A';
        }
    }
    else if(guess < secNum && score !== 0 && valid){
        document.querySelector('.message').textContent = '😂 Guessed number is too low...';
        if(score > 1){
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            score = 0
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent = '🤣 You lost the game. Try again...';
            document.querySelector('body').style.backgroundColor = '#E9967A';
        }
    }
    else if(!valid) document.querySelector('.message').textContent = 'Numbers from 1 to 20 allowed !!'

})
