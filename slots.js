console.log("hello");

  /*----- constants -----*/
const SPINNERS = {
    pineapple: {img: 'img/pineapple.png', value: 30},
    mango: {img: 'img/pineapple.png', value: 50},
    banana: {img: 'img/pineapple.png', value: 100},
}
const WAGERAMOUNTS = {
    wager1: 10,
    wager2: 20,
    wager3: 50,
}


  /*----- state variables -----*/
let purse = 1000; //start with 0 and update as game progresses
let winner = " " ; //winner will be kicked in if purse reaches a specific amount 
let loser = " "; //if purse hits 0, game will be over
let wager = ""; //variable to hold WAGERAMOUNTS value that will be triggered by DOM elements

  /*----- cached elements  -----*/
let winLoseEl = document.getElementById("winLose");
let playBtnEl = document.getElementById("play");
let resetBtnEl = document.getElementById("reset");

let wagerBtn10 = document.getElementById("wager1")
let wagerBtn50 = document.getElementById("wager2")
let wagerBtn100 = document.getElementById("wager3")

 //need to put this in a function
let purseEl = document.getElementById("purse");
//purseEl.style.innerText = purse

  /*----- event listeners -----*/


  /*----- functions -----*/



//initalize game state
function init() {

  }

 //render board - is this even necessary?  
function render() {

  }

//take the amount from the button click and then cache that amount as a variable
// function wager() {}

//once play button has been clicked, generate rndIdx from SPINNERS object for each div/img
function getSpinner1() {
    const fruits1 = Object.keys(SPINNERS);
    const rndIdx = Math.floor(Math.random() * fruits1.length);
    return fruits1[rndIdx];
};
function getSpinner2() {
    const fruits2 = Object.keys(SPINNERS);
    const rndIdx = Math.floor(Math.random() * fruits2.length);
    return fruits2[rndIdx];
};
function getSpinner3() {
    const fruits3 = Object.keys(SPINNERS);
    const rndIdx = Math.floor(Math.random() * fruits3.length);
    return fruits3[rndIdx];
};

//call and cache 3 spinner functions
//compare each spin and return positive value to purse
//if no winner subtract the value of wager from purse
function getSpinner() {
    let spin1 = getSpinner1();
    let spin2 = getSpinner2();
    let spin3 = getSpinner3();
    if (spin1 === "banana" && spin1 === spin2 && spin1 === spin3) {
        return purse = wager*10 + purse;
    } else if (spin1 === "mango" && spin1 === spin2 && spin1 === spin3) {
        return purse = wager*7 + purse;
    } else if (spin1 === "pineapple" && spin1 === spin2 && spin1 === spin3) {
        return purse = wager*5 + purse;
    } else {
        return purse = purse - wager;
    }
};

// evaluates what to do when a endGame condition is met
function endGame(){
    if (purse <= 0) {
        winLoseEl.style.innerText = "YOU LOSE";
        winLoseEl.style.visibility = "visible";
        playBtnEl.style.visibility = "hidden";
        resetBtnEl.style.visibility = "visible";
    } else if (purse >= 1000) {
        winLoseEl.style.innerText = "YOU WIN";
        winLoseEl.style.visibility = "visible";
        playBtnEl.style.visibility = "hidden";
        resetBtnEl.style.visibility = "visible";
    };
};


//cache the index value for each div/img
//render screen with images
//determine if the combination of rndIdx will result in any wins
//if wins add that amount to the purse

function spin() {

}



 