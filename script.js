function computerPlay()
{
    let random = Math.floor( Math.random() * 3 );

    console.log(random);
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
        computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
        return "You lose! " + computerSelection + " beats " + playerSelection + "!";
    }
    if(playerStatus==1)
    {
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
        let playerChoice = window.prompt("Rock, paper, or scissors?");

        if (playerChoice==null) /* In case the prompt is cancelled so there's no input */
        {
            return;
        }

        let result = evaluateRound(playerChoice, computerPlay() );
        alert(result);
    }
}