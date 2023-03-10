# Island-Slots-Game


## Live link:
(https://collinbarlow-enterprise.github.io/Island-Slots-Game/)

### Description: 
Island Slots is a slot machine game that includes a wagering system, a tropical color scheme and a win/loss condition. 

#### Screenshots of the game:
Game at start IslandSlotsTitle.png

Game at loss IslandSlotsLoss.png

Game at win IslandSlotsWin.png



##### Technologies used:
Javascript, CSS, HTML

###### Problems Experienced: 
The first iteration of this game was a simple javascript code that can still be seen on the "simple code" branch of this project. 

When I refactored this code to decrease the reptitiveness I ended up creating several nodelists and arrays that impacted how the logic flowed. The solution ended up being a total rewrite that allowed for easier manipulation of the wager values while reducing the code lines by a third. 

I ended up combining 6 separate functions into one.

The specific troublesome code is shown below: 
```js
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
```

Another issue I experienced was getting the CSS grid and flexbox to be responsive enough to allow for ease of use across screen sizes. I solved that issue by creating a CSS grid for screentops and then a CSS flex for mobile devices. 

###### Stretch Goals/Future Plans:
The UI will be updated with a more mobile friendly designed. 

The UI will be updated with a design that minimizes the negative space.  

A timer function that forces a fast-pace of play or the purse is reduced. 

###### Sources:
I used [CSS Gradient](https://cssgradient.io/) to generate the color gradient background 

I used [pngtree](https://pngtree.com/freepng/pineapple-tropical-fruit_5268182.html) for all three of the fruit graphics, and the artist is [Howliekat](https://pngtree.com/howliekat_12244472?type=1).

