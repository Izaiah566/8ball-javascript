'use strict';

const answers = [
    "Yes",
    "no",
    "Maybe",
    "Ask again later",
    "Definitely",
    "Absolutely",
    "It is certain",
    "Don't count on it",
    "Very doubtful",
    "Better not tell you now"];

document.addEventListener("DOMContentLoaded", function () {
    const question = document.querySelector("#question");
    const answerDiv = document.querySelector("#answer");
    const blackBall = document.querySelector(".black-ball")

    question.addEventListener("click", function (){
        const randomIndex = Math.floor(Math.random() * answers.length);
        const answer = answers[randomIndex];
        blackBall.className='black-ball animate'
        if (question.length === 0)
        {
            answerDiv.innerHTML = "Please ask a valid yes/no question.";
            answerDiv.style.fontSize = '1.1rem';
            return;
        }
        else
        {
            setTimeout(()=>{
                answerDiv.innerHTML = answer;
                answerDiv.style.fontSize = '1.1rem';
                blackBall.className='black-ball';
            },3000);
        }
    });
});