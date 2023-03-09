console.log("hello");

  /*----- constants -----*/
const SPINNERS = {
    pineapple: {img: 'img/pineapple.png', value: 3},
    mango: {img: 'img/mango.png', value: 5},
    banana: {img: 'img/banana.png', value: 10},
}
const WAGERAMOUNTS = {
    wager1: 10,
    wager2: 20,
    wager3: 50,
}

const fruitKeys = Object.keys(SPINNERS);
let rndIdx = Math.floor(Math.random() * fruitKeys.length);


  /*----- state variables -----*/
let purse = 1000; //start with 0 and update as game progresses
let wager = " "; //variable to hold WAGERAMOUNTS value that will be triggered by DOM elements



  /*----- cached elements  -----*/
let winLoseEl = document.getElementById("winLose");
let playBtnEl = document.getElementById("play");
let resetBtnEl = document.getElementById("reset");

//set a DOM element for each spinner image and then update that image using the SPINNERS img src 
let spin1El = document.getElementById("spin1").src;
let spin2El = document.getElementById("spin2").src;
let spin3El = document.getElementById("spin3").src;
let spinAllEl = document.querySelectorAll(".spinners") //should be able to get rid of spin1el, etc, and replace with a forEach loop
let spinAllArray = Array.from(spinAllEl);

//need to code an onclick evt for each of these that update the wager value with their specified value
let wagerBtn10 = document.getElementById("wager1")
let wagerBtn20 = document.getElementById("wager2")
let wagerBtn50 = document.getElementById("wager3")
// let wagerBtnAllEl = document.getElementsByClassName("bets") // shoud be able to get rid of wagerBtn, etc, and replace with a forEach loop


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
// wagerBtnAllEl.addEventListener('click', setWager); //should be able to replace these event listeners with wagerBtnAllEl now

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
    getSpinnerIdx();
    // debugger   
    // getSpinner(); 
    // debugger
    updatePurse();
    updateWinnings();
    endGame();
}

function getSpinnerIdx() {
    spinAllArray.forEach((fruit) => {
        const fruitKeys = Object.keys(SPINNERS);
        let rndIdx = Math.floor(Math.random() * fruitKeys.length);
        fruit.setAttribute("src",`${SPINNERS[fruitKeys[rndIdx]].img}`)});
    // })};

  
//  function getSpinner() { 
    if (spinAllArray[0].src === spinAllArray[1].src && spinAllArray[0].src === spinAllArray[2].src) {
        coinSoundAudio.volume = 0.2; 
        coinSoundAudio.play();
        // debugger        
        console.log(purse);
        purse = parseInt(`${wager*SPINNERS[fruitKeys[rndIdx]].value}`) + purse;
        console.log(purse);
        // debugger
     
    // } else if (spin1El === "mango" && spin1El === spin2El && spin1El === spin3El) {
    //     coinSoundAudio.volume = 0.2; 
    //     coinSoundAudio.play();
    //     return purse = wager*7 + purse;
    // } else if (spin1El === "pineapple" && spin1El === spin2El && spin1El === spin3El) {
    //     coinSoundAudio.volume = 0.2; 
    //     coinSoundAudio.play();
    //     return purse = wager*5 + purse;

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
// wagerBtnAllEl.forEach((button)=> {
    wager = evt.target.innerText;
    updateWagerEl();
};

    // wager = evt.target.innerText; need to use a foreach
    // updateWagerEl();

function updateWinnings() {
   winningsEl.innerHTML = `WINNINGS: ${purse-1000}`;
};
function updateWagerEl() {
    currentWagerEl.innerHTML = `WAGER: ${wager}`; 
 };
 