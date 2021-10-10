function computerPlay(){
    var arr=["Rock","Paper","Scissor"];
    return arr[Math.floor(Math.random()*3)];
}
function playRound() {
    var computerSelection = computerPlay();
    var playerSelection = prompt();
    if(playerSelection==computerSelection) {
        return "ITS A TIE";
    }
    else if(playerSelection=="Rock" && computerSelection=="Scissor") {
        return "Player wins";
    }
    else if (playerSelection=="Paper" && computerSelection=="Rock"){
        return "Player wins";
    }
    else{
        return "Computer wins";
    }
  }
  function game(){
      var count_player=0;
      var count_computer=0;
        for(var i=1;i<6;i++){
            if(playRound()=="Player wins") {
                console.log("Player wins round" +i);
                count_player++;
            }

            else if(playRound()=="Computer wins") {
                console.log("Computer wins round "+i);
                count_computer++;
            }
            else{
                console.log("Round " +i +" was a tie");
            }
        }
        if(count_player>count_computer)console.log("PLAYER WINS");
        else if(count_computer>count_player)console.log("COMPUTER WINS");
        else console.log("ITS A TIE");
  }
const playerSelection = "Paper";
console.log(game());