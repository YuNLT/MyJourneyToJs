const palyGame = confirm("Do you want to play rock, paper scissor gaem?");
if(palyGame){
    while(palyGame){
        const playerChoice = prompt("Please enter your choice: rock, paper, or scissors?");
        if(playerChoice || playerChoice === " "){
            const player = playerChoice.trim().toLowerCase();
            const computerChoice = Math.floor(Math.random()*3);
            const rpsChoice = ["rock", "paper", "scissors"];
            const computer = rpsChoice[computerChoice];
            const result = player === computer ? `player choice: ${player}\n computer choice: ${computer}\n tie game`
            : player === "rock" && computer === "paper" ? `player choice: ${player}\n computer choice: ${computer}\n computer wins`
            : player === "scissors" && computer === "rock" ? `player choice: ${player}\n computer choice: ${computer}\n computer wins`
            : player === "paper" && computer === "scissors" ? `player choice: ${player}\n computer choice: ${computer}\n computer wins`
            : 'player choice: ${player}\n computer choice: ${computer}\n player wins';
            alert(result);
            palyGame = confirm("Do you want to play again?");
            if(!palyGame) 
                {alert("OK, maybe next time.");
            continue;
            }
            else{
                alert("OK, maybe next time.");
                continue;
            }
        }
        else{
            alert("You did not enter a choice.");
            break;
        }
    }
}
else{
    alert("OK, maybe next time.");
}