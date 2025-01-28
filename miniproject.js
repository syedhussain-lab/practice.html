let userscore=0;
let compscore=0;

const choice=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")
const userscorepara =document.querySelector("#user-score");
const compscorepara =document.querySelector("#comp-score");


const drawGame=()=>{
    
    msg.innerText="Game was draw.Play again"
    msg.style.backgroundColor="grey";
    

};
const showWinner=(userWin,userChoice,compchoice)=>{

    if(userWin){
        userscore++;
        userscorepara.innerText=userscore;
    msg.innerText=`you Win!Your ${userChoice} beats ${compchoice}`;
    msg.style.backgroundColor="green";

    }else{
        compscore++;
        compscorepara.innerText=compscore;
    msg.innerText=`You lose!${compchoice} beats ${userChoice}`;
    msg.style.backgroundColor="red";
    


    }
};


const gencompchoice=(compchoice)=>{
    const options=["rock","paper","scissors"];
    const choiceidx=Math.floor(Math.random()*3)
    return options[choiceidx];
}
const playgame=(userChoice)=>{
    const compchoice=gencompchoice();
   




if(userChoice===compchoice){
    drawGame();
}else{

    let userWin= true;
    if(userChoice==="rock"){
     //paper,scissor
     userWin=compchoice==="paper" ? false : true;
    }else if(userChoice==="paper"){
     //rock ,scissor
     userWin=compchoice==="scissors"? false : true;
    }else {
      //rock ,paper
     userWin=compchoice==="rock" ? false : true;
    };
    showWinner(userWin, userChoice,compchoice);
 }
};

choice.forEach((choice)=>{
           
    choice.addEventListener("click",()=>{
        const choiceId=choice.getAttribute("id")
            playgame(choiceId);


           });
});