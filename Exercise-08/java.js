/*declare elements, defined as const*/
const change = document.getElementById('switcher');

const fly = document.getElementsByTagName('body')[0];

const yellow = document.getElementById('yellowButton');
const white = document.getElementById('whiteButton');
const blue = document.getElementById('blueButton');
const red = document.getElementById('redButton');

console.log(change)




function changeColorYellow(){
    fly.style.background = 'yellow';
}

function changeColorWhite(){
    fly.style.background = 'white';
}

function changeColorBlue(){
    fly.style.background = 'blue';
}

function changeColorRed(){
    fly.style.background = 'red';
}


yellow.addEventListener('click',changeColorYellow)
white.addEventListener('click',changeColorWhite)
blue.addEventListener('click',changeColorBlue)
red.addEventListener('click',changeColorRed)