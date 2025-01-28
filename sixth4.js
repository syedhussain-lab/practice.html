let div = document.querySelector("div");
console.log(div );

let value=div.getAttribute("id");
console.log(value);


let para=document.querySelector("p");
console.log(para.getAttribute("class"));
console.log(para.setAttribute("class","newclass"));


div.style.backgroundColor="red"
div.style.fontStyle="italic"

//div.innerText="hello!"

let newbtn=document.createElement("button");
newbtn.innerText=("click here!");
console.log(newbtn);

let div2=document.querySelector("div");
div.append(newbtn);
//prepend,before,after for button adjustment

let newHeading=document.createElement("h1");
newHeading.innerHTML="Hi,I'm new!";

document.querySelector("body").prepend(newHeading);

//delete anything with js

let paragraph=document.querySelector("p");
paragraph.remove();


//let's practice;


