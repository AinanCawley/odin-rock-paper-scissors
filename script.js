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
    }

    if(playerStatus==0)
    {
        return "You lose!";
    }
    if(playerStatus==1)
    {
        return "You win!";
    }

}