# Island-Slots-Game
<<<<<<< HEAD
# Island-Slots-Game
# Island-Slots-Game
# Island-Slots-Game


Island Slots is a slot machine game that will include a wagering system and a design/color scheme that will be tropical. 

For a slot machine game to work there needs to be:

    a purse with a predefined starting amount
    
    a wagering system with the ability to choose from multiple size bets
    
    spinners that will be randomly decided and return (or not)specific amounts to the purse that will multiplied by the wager size

    there will be one winning condition: the purse reaches a specific value (e.g. 2000)
    there will be one losing condition: the purse reaches 0

Psuedocode:
    I need to create a variable that will hold the purse's value

    I need to create an object with multiple properties that will hold the various wager amounts

    When a wager amount is selected, the purse will be reduced by that amount

    There will be an object for the 3 spinners that will include 3 arrays, each being the same 
        (e.g. arr1[pineapple: 10, strawberry: 20, mango: 50], arr2[pineapple: 10, strawberry: 20, mango: 50], arr3: [pineapple: 10, strawberry: 20, mango: 50])

    When a play button is pressed (after the wager amount has been selected) the object for the spinners will return a random index value from 0-2

    If the results of the spinners equal specific combinations then a value will be returned back to the purse multiplied by the wager amount 
        (e.g. pineapple - pineapple - pineapple will return 10 * wagerAmount)

    If the results do not include any of the specific combinations then the purse will not be affected

    Then the wager system, spinners, and play button need to be reset

    This will allow the game to continue until either the lose condition or winning condition is met

Stretch Goals: 
    include audio like
        coins: when the purse is added to
        parrot squaking: when lose/win condition is met
    
    timer for selecting bets: if bet is not placed in time then purse is reduced by an amount

Wireframe;

I've sketched a mockup, but I don't know how to include it in this file

It will have a gradient background with a tropical color scheme
A h1 with the value of "Island Slots"
A main div that will appear on top of the background
That main div will utilize a flex display with a 5x5 grid
             empty empty empty empty purse
         empty spinner empty spinner empty spinner
             empty  empty empty empty empty
             wager wager wager wager wager
             empty empty play empty empty 
=======

>>>>>>> f9eed7575f9b147dc76ef48b7d1b82623892c50b
