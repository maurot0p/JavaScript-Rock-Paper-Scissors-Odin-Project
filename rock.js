function computerPlay(){
    var arr=["Rock","Paper","Scissor"];
    return arr[Math.floor(Math.random()*3)];
}
function playRound(playerSelection) {
    var computerSelection = computerPlay();
    if(playerSelection==computerSelection) {
        return "ITS A TIE";
    }
    else if(playerSelection=="Rock" && computerSelection=="Scissor") {
        return "Player wins";
    }
    else if (playerSelection=="Paper" && computerSelection=="Rock"){
        return "Player wins";
    }
    else if(playerSelection=="Scissor" && computerSelection=="Paper"){
      return "Player wins";
    }
    else{
        return "Computer wins";
    }
  }
  const container=document.querySelector('#container');
  const result_computer=document.querySelector('#computer');
  const result_player=document.querySelector('#player');
  const winner =document.querySelector('#winner');
  const tie=document.querySelector('#tie');
  var count_player=0;
  var count_computer=0;
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if(playRound(button.id)=="Player wins") {
        tie.style.display="none";
        count_player++;
        result_player.textContent="Player:"+count_player;
    }
    else if(playRound(button.id)=="Computer wins") {
      tie.style.display="none";
      count_computer++;
      result_computer.textContent="Computer:"+count_computer;
    }
    else{
      tie.style.display="block";
      tie.textContent="IT WAS A TIE!";
    }
    if(count_player>=5){
      winner.style.display = "block";
      winner.textContent="Player wins!";
      count_player=0;
      count_computer=0;
      result_computer.textContent="Computer:"+count_computer;
      result_player.textContent="Player:"+count_player;
    }
    if(count_computer>=5){
      winner.style.display = "block";
      winner.textContent="Computer wins!";
      count_player=0;
      count_computer=0;
      result_computer.textContent="Computer:"+count_computer;
      result_player.textContent="Player:"+count_player;
    }
    });
  });

  
