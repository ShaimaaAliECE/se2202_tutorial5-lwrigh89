let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game
document.getElementById("next-lbl").innerHTML = nextPlayer;
// use the value stored in the nextPlayer variable to indicate who the next player is


//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    for (let gameBoard of document.getElementsByTagName("td")) {
        let brackets = document.createElement("button")
        brackets.innerHTML = "[]"
        brackets.type = "brackets"
        document.getElementById(gameBoard.id).appendChild(brackets)
    }
   
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
    let test = event.target
    test.innerHTML = nextPlayer
    if (nextPlayer == 'X') {
        nextPlayer = 'O'
    } else {
        nextPlayer = 'X'
    }
    document.getElementById("next-lbl").innerHTML = nextPlayer
    test.disabled = true
    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver())
    {
        let header = document.createElement("h1")
        header.innerHTML = "Game Over"
        document.getElementById('game-over-lbl').appendChild(header)
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    let num = 0
    let button = document.querySelectorAll('button')


    for (let i = 0; i < button.length; i++) {

        if (button[i].disabled == true) {
            num++
        }
    }
    if (num == button.length) {
        return true
    } else {
        return false
    }
    // This function returns true if all the buttons are disabled and false otherwise 
   
}
