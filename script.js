const cookie = document.getElementById("cookie");
const score = document.getElementById("score");

let time = 5;
console.log("wowkwekekw")
let scoreCount = 0;
cookie.addEventListener('click', () => {
    console.log("Cookie clicked");


    const text = document.createElement('span');
    const posX = window.innerWidth - cookie.offsetWidth;
    const posY = window.innerHeight - cookie.offsetHeight;

    const ranTPosition = Math.floor(Math.random() * posY);
    const ranXPosition = Math.floor(Math.random() * posX);


    /*button.innerHTML = mathRandom(Math.random() * 100);*/
    cookie.style.position = 'absolute';
    cookie.style.top = ranTPosition + 'px';
    cookie.style.left = ranXPosition + 'px';

    text.style.position = 'absolute';
    text.style.top = ranTPosition + 150 + 'px';
    text.style.left = ranXPosition + 100 + 'px';
    text.innerHTML = "+1";

    text.style.fontSize = '80px';
    text.style.transition = 'opacity 0.5s linear';
    text.style.opacity = '1';
    document.body.appendChild(text);
    setTimeout(() => {
        text.style.opacity = '0';
    }, 2500);
    setTimeout(() => {
        text.innerHTML = "";
    }, 3000);


    scoreCount++;
    score.style.position = 'absolute';
    score.textContent = "Score:" + scoreCount;
    console.log(scoreCount);
    console.log(ranXPosition);
    console.log(ranTPosition);
});