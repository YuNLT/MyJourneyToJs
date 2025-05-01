//Rock, paper scissors game
const initGame = () => {
    const startGame = confirm("Do you want to play Rock, Paper, Scissors?");
    startGame ? playGame() : alert("Maybe next time!");
};

//Game Flow
const playGame = () => {
    while(true){
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice);
        if(playerChoice === ""){
            invalidChoice();
            return;
        }
        if(!playerChoice){
            decideNotToPlay();
            break;
        }
        playerChoice = evaluatePlayerChoice(playerChoice);
        if(!playerChoice){
            invalidChoice();
            continue;
        }
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice,computerChoice);
        displayResult(result);
        if(askToPlayAgain()){
            continue;
        }else{
            thanksForPlaying()
            break;
        }
    }
};

const getPlayerChoice = () => {
    return prompt("Choose Rock, Paper, or Scissors:");
};

const formatPlayerChoice = (playerChoice) => {
    if(playerChoice || playerChoice === ""){
        return playerChoice.trim().toLowerCase();
    }
    else{
        return false;
    }
};

const decideNotToPlay = () => {
    alert("I guess you changed your mind. Maybe next time.");
};

const evaluatePlayerChoice = (playerChoice) => {
    if(
        playerChoice === "rock" ||
        playerChoice === "paper" ||
        playerChoice === "scissors"
    ){
        return playerChoice;
    }else{
        return false;
    }
};

const invalidChoice = () => {
    alert("You didn't enter rock, paper, scissors!");
};

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random()*3);
    const rpsArray = ["rock","paper","scissors"];
    return rpsArray[randomNumber];
};

const determineWinner = (player,computer) => {
    const winner = 
    player === computer ? "Tie Game" 
    :player==="rock" && computer === "paper" ? `Player: ${player}\nComputer: ${computer}\nComputer wins!`
    :player==="paper" && computer === "scissors" ? `Player: ${player}\nComputer: ${computer}\nComputer wins!`
    :player === "scissors" && computer === "rock" ? `Player: ${player}\nComputer: ${computer}\nComputer wins!`
    :`Player: ${player}\nComputer: ${computer}\nPlayer wins!`;

    return winner;
};

const displayResult = (result) => {
    alert(result);
};

const askToPlayAgain = () => {
    return confirm("Will you play Again?");
};

const thanksForPlaying = () =>{
    alert("Thank you for playing");
};

initGame();