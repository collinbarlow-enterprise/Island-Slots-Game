  /*----- constants -----*/
const SPINNERS = {
    pineapple: {img: 'img/pineapple.png', value: 2},
    mango: {img: 'img/mango.png', value: 3},
    banana: {img: 'img/banana.png', value: 5},
}
const WAGERAMOUNTS = {
    wager1: 50,
    wager2: 75,
    wager3: 100,
}

const fruitKeys = Object.keys(SPINNERS);
let rndIdx = Math.floor(Math.random() * fruitKeys.length);


  /*----- state variables -----*/
let purse = 1000; 
let wager = " "; 

  /*----- cached elements  -----*/
let winLoseEl = document.getElementById("winLose");
let playBtnEl = document.getElementById("play");
let resetBtnEl = document.getElementById("reset");

let spinAllEl = document.querySelectorAll(".spinners") 
let spinAllArray = Array.from(spinAllEl);

let wagerBtn10 = document.getElementById("wager1")
let wagerBtn20 = document.getElementById("wager2")
let wagerBtn50 = document.getElementById("wager3")

let purseEl = document.getElementById("purse");

let winningsEl = document.getElementById("winnings");
let currentWagerEl = document.getElementById("currentWager");

let loseSoundAudio = document.getElementById("loseSound");
let coinSoundAudio = document.getElementById("coinSound");
let winSoundAudio = document.getElementById("winSound");

  /*----- event listeners -----*/
wagerBtn10.addEventListener('click', setWager);
wagerBtn20.addEventListener('click', setWager);
wagerBtn50.addEventListener('click', setWager);

document.querySelector("#play").addEventListener('click', render);

document.querySelector("#reset").addEventListener('click', init);

  /*----- functions -----*/
function init() {
 purse = 1000;
updatePurse();
updateWinnings();
winLoseEl.style.visibility = "hidden";
playBtnEl.style.visibility = "visible";
resetBtnEl.style.visibility = "hidden";
}
function render() {
    getSpinner();
    updatePurse();
    updateWinnings();
    endGame();
}

function getSpinner() {
    spinAllArray.forEach((fruit) => {
        const fruitKeys = Object.keys(SPINNERS);
        let rndIdx = Math.floor(Math.random() * fruitKeys.length);
        fruit.setAttribute("src",`${SPINNERS[fruitKeys[rndIdx]].img}`)});

    if (spinAllArray[0].src === spinAllArray[1].src && spinAllArray[0].src === spinAllArray[2].src) {
        coinSoundAudio.volume = 0.2; 
        coinSoundAudio.play();      
        purse = parseInt(`${wager*SPINNERS[fruitKeys[rndIdx]].value}`) + purse;
    } else {
        return purse = purse - wager;
    }
};

function endGame(){
    if (purse <= 0) {
        loseSoundAudio.volume = 0.1;
        loseSoundAudio.play();
        winLoseEl.innerText = "YOU LOSE";
        winLoseEl.style.visibility = "visible";
        playBtnEl.style.visibility = "hidden";
        resetBtnEl.style.visibility = "visible";
    } else if (purse >= 2000) {
        winSoundAudio.volume = 0.2;
        winSoundAudio.play();
        winLoseEl.innerText = "YOU WIN";
        winLoseEl.style.visibility = "visible";
        playBtnEl.style.visibility = "hidden";
        resetBtnEl.style.visibility = "visible";
    };
};

function updatePurse() {
   purseEl.innerHTML = `Purse: ${purse}`; 
};
function setWager(evt) {
    wager = evt.target.innerText;
    updateWagerEl();
};
function updateWinnings() {
   winningsEl.innerHTML = `WINNINGS: ${purse-1000}`;
};
function updateWagerEl() {
    currentWagerEl.innerHTML = `WAGER: ${wager}`; 
 };