let userScore = 0;
let compScore = 0;
let count=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let round=document.querySelector("#round");
const res=document.querySelector("#result");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
choices[0].disabled=true;

const showResult =()=>{
  if(userScore>compScore)
  {
    res.innerText="...WIN!..."
  }
  else if(userScore<compScore)
  {
    res.innerText="...LOSE!..."
  }
  else{
    res.innerText="...TIE!..."
  }
}
const genCompChoice = () =>
  {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  console.log(options[randIdx])
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "rgba(0, 0, 70, 0.747)";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats Computer ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost.Computer ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }

};

const playGame = (userChoice) => {
  //Generate computer choice
  count++;
  if(count<=5)
  {
  const compChoice = genCompChoice();
 
  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  }
   else
    {
    let userWin = true;
    if (userChoice === "rock") 
    {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } 
    else if (userChoice === "paper")
     {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } 
    else 
    {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice); 
  }
   if(count===5)
   {
    round.innerText=`Round ${count}`
    showResult();
    
   }
   if(count<5)
   {
    round.innerText=`Round ${count}`
   }
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

