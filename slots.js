console.log("hello");

  /*----- constants -----*/
const SPINNERS = {
    pineapple: {img: 'img/pineapple.png', value: 30},
    mango: {img: 'img/mango.png', value: 50},
    banana: {img: 'img/banana.png', value: 100},
}
const WAGERAMOUNTS = {
    wager1: 10,
    wager2: 20,
    wager3: 50,
}

  /*----- state variables -----*/
let purse = 1000; //start with 0 and update as game progresses
let wager = " "; //variable to hold WAGERAMOUNTS value that will be triggered by DOM elements

let fruitsIdx = [];

  /*----- cached elements  -----*/
let winLoseEl = document.getElementById("winLose");
let playBtnEl = document.getElementById("play");
let resetBtnEl = document.getElementById("reset");

//set a DOM element for each spinner image and then update that image using the SPINNERS img src 
let spin1El = document.getElementById("spin1");
let spin2El = document.getElementById("spin2");
let spin3El = document.getElementById("spin3");
let spinAllEl = document.querySelectorAll(".spinners") //should be able to get rid of spin1el, etc, and replace with a forEach loop
testArray = Array.from(spinAllEl);

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


// wagerBtn10.addEventListener('click', updateWagerEl);
// wagerBtn20.addEventListener('click', updateWagerEl);
// wagerBtn50.addEventListener('click', updateWagerEl); //don't need anymore since updateWagerEl() is nested within setWager();

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
    getSpinner(); 
    updatePurse();
    updateWinnings();
    endGame();
}

function getSpinnerIdx() {
    testArray.forEach((fruit) => {
        const fruits = Object.keys(SPINNERS);
        const rndIdx = Math.floor(Math.random() * fruits.length);
        return fruitsIdx.push((fruits[rndIdx]));
    })};

 function getSpinner() { 
    testArray.forEach((block) => {
        block.src = `${SPINNERS[fruitsIdx].img}`;
       });

    if (spin1El === "banana" && spin1El === spin2El && spin1El === spin3El) {
        coinSoundAudio.volume = 0.2; 
        coinSoundAudio.play();
        return purse = wager*10 + purse;
    debugger
    } else if (spin1El === "mango" && spin1El === spin2El && spin1El === spin3El) {
        coinSoundAudio.volume = 0.2; 
        coinSoundAudio.play();
        return purse = wager*7 + purse;

    } else if (spin1El === "pineapple" && spin1El === spin2El && spin1El === spin3El) {
        coinSoundAudio.volume = 0.2; 
        coinSoundAudio.play();
        return purse = wager*5 + purse;

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
 

 //forgotten animation lines of code
 function animateSlots() {
    spinAllEl.forEach((slot) => {
    slot.classList.add(".p");
    // slot.style.animation = "none";
    // void slot.offsetHeight;
    // slot.style.animationName = "scrollSlot";
})};   
function stopSlots() {
    spinAllEl.forEach((slot) => { 
    slot.classList.remove(".p");})
    // void slot.offsetHeight;
    // slot.style.animation = "none";
    setTimeout(getSpinner, 2000);
    console.log("animate slot works");
}
//forgotten render code with animation functions nested
// function render() {
//     //had setWager here but think render should be nested inside setWager?
//     // setWager();
//     // updateWagerEl();//only updates on play being clicked - need to add evt listener and set it seperate
//     // void spinAllEl.offsetHeight;
   
//     animateSlots();
//     setTimeout(stopSlots(),2000);
//     getSpinnerIdx();   
//     getSpinner(); 
//     // animateSlots();
//     updatePurse();
//     updateWinnings();
//     endGame();
//   }