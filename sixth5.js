let newbtn=document.createElement("button");
newbtn.innerHTML=("click here!")

newbtn.style.color="white";
newbtn.style.backgroundColor="red";
document.querySelector("body").prepend(newbtn);

//Q2
let para=document.querySelector("p");
//console.log(para.getAttribute("class"))


para.classList.add("class","newclass")
console.log(para);