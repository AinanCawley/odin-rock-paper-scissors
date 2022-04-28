function computerPlay()
{
    let random = Math.floor( Math.random() * 3 );

    if (random==0)
    {
        return "Rock";
    }
    if (random==1)
    {
        return "Paper";
    }
    if (random==2)
    {
        return "Scissors";
    }

    return "Error: random is not == 1, 2, or 3"

    /* Testing the distribution of the random function

    let zeroCount=0;
    let oneCount=0;
    let twoCount=0;

    for(let i=0; i<9999999; i++)
    {
        let random = Math.floor( Math.random() * 3 );

        if (random==0)
        {
            zeroCount++;
        }
        if (random==1)
        {
            oneCount++;
        }
        if (random==2)
        {
            twoCount++;
        }
    }
    console.log(zeroCount);
    console.log(oneCount);
    console.log(twoCount);

    */
}

function evaluateRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    if ( ( playerSelection=="ROCK" || ( playerSelection=="PAPER" || playerSelection=="SCISSORS" ) ) == false )
    {
        return "Your input was invalid!"; /* To handle typos or just plain wrong inputs */
    }

    let playerStatus;

    if(playerSelection=="ROCK")
    {
        if(computerSelection=="ROCK")
        {
            playerStatus = 2;
        }
        if(computerSelection=="PAPER")
        {
            playerStatus = 0;
        }
        if(computerSelection=="SCISSORS")
        {
            playerStatus = 1;
        }
    }
    if(playerSelection=="PAPER")
    {
        if(computerSelection=="ROCK")
        {
            playerStatus = 1;
        }
        if(computerSelection=="PAPER")
        {
            playerStatus = 2;
        }
        if(computerSelection=="SCISSORS")
        {
            playerStatus = 0;
        }
    }
    if(playerSelection=="SCISSORS")
    {
        if(computerSelection=="ROCK")
        {
            playerStatus = 0;
        }
        if(computerSelection=="PAPER")
        {
            playerStatus = 1;
        }
        if(computerSelection=="SCISSORS")
        {
            playerStatus = 2;
        }
    }

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerStatus==0)
    {
        computerScore += 1;
        computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
        return "You lose! " + computerSelection + " beats " + playerSelection + "!";
    }
    if(playerStatus==1)
    {
        playerScore += 1;
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        return "You win! " + playerSelection + " beats " + computerSelection + "!";
    }
    if(playerStatus==2)
    {
        return "It's a draw! You both picked " + playerSelection + "!";
    }

}

function game()
{
    for(let i=0; i>-1; i++)
    {
        let playerChoice = window.prompt('Rock, paper, or scissors? \n\nYou can quit by pressing "Cancel" or pressing "OK" without any input.');

        if (playerChoice==null) /* In case the prompt is cancelled so there's no input */
        {
            return;
        }
        if (playerChoice==undefined) /* In case the prompt is cancelled so there's no input */
        {
            return;
        }
        if (playerChoice==="") /* In case the prompt is cancelled so there's no input */
        {
            return;
        }
        

        let result = evaluateRound(playerChoice, computerPlay() );
        alert(result);
    }
}

/* DOM STUFF */

const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');

const selectionsContainer = document.getElementById('selections');
console.log(selectionsContainer);
const resultsContainer = document.getElementById('results');
const scoreContainer = document.getElementById('score');

const selections = document.createElement('p');
const result = document.createElement('p');
const score = document.createElement('p');
score.innerText = "Player: 0 Computer: 0"
let playerScore = 0;
let computerScore = 0;


rockButton.addEventListener('click', function(event)
{
    let playerChoice = 'Rock';
    let computerChoice = computerPlay();

    selections.innerText = "You picked rock. Computer picked " + computerChoice.toLowerCase() + ".";
    result.innerText = evaluateRound(playerChoice,computerChoice);
    score.innerText = "Player: " + playerScore + " Computer: " + computerScore;

    selectionsContainer.replaceChildren();
    selectionsContainer.appendChild(selections);

    resultsContainer.replaceChildren();
    resultsContainer.appendChild(result);

    scoreContainer.replaceChildren();
    scoreContainer.appendChild(score);
});
paperButton.addEventListener('click', function(event)
{
    console.log(event);
});
scissorsButton.addEventListener('click', function(event)
{
    console.log(event);
});