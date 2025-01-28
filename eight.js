let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newbtn= document.querySelector(".new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;

const resetgame=()=>{
    turnO=true;
    enablebtn();
    msgContainer.classList.add("hide");

}

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];



boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    if(turnO){
        box.innerText="O";
        turnO=false;
    }else{
        box.innerText="X";
        turnO=true;
    }
    box.disabled=true;
    checkwinner();
    });
    
});
const disabledbtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enablebtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations ,Winner is ${winner}`;
    msgContainer.classList.remove ("hide")
    disabledbtn();
}




const checkwinner=()=>{
    for(let pattern of winpatterns){
                
           let pos1val=boxes[pattern[0]].innerText;
           let pos2val=boxes[pattern[1]].innerText;
           let pos3val=boxes[pattern[2]].innerText;

           if(pos1val != ""&& pos2val !=""&& pos2val!=""){
           if( pos1val=== pos2val && pos2val===pos3val){
            console.log("winner",pos1val);
            showWinner(pos1val);
           }
           }

                

    }


};
newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
