console.log("event in js")
//let btn1=document.querySelector("#btn");
/*btn1.onclick=()=>{
    console.log("button was clicked")
    let a=24;
    a++;
    console.log("a=",a);
}

let btn2=document.querySelector("#btn2");
btn2.ondblclick=(e)=>{
    console.log(e)
    
}*/

let div=document.querySelector("div");
div.onmouseover=(evt)=>{
    console.log("button was clicked")
    console.log(evt.clientX,evt.clientY,evt.target,evt.type)

    
};
let btn1=document.querySelector("#btn");
btn1.addEventListener("click", ()=>{
    console.log("button1 was clicked")
});
btn1.addEventListener("click", (event)=>{
    console.log("button1 was clicked second time")
    console.log(event);
    console.log(event.type);
    console.log(event.clientX);
    console.log(event.target);
    console.log(event.clientY);



});

let btn2=document.querySelector("#btn2");

btn2.addEventListener("click",()=>{
    console.log("button was clicked-handler1")
});

btn2.addEventListener("click",()=>{
    console.log("button was clicked-handler2")
});

const handler3=()=>{
    console.log("button was clicked-handler3")
};
btn2.addEventListener("click",handler3)

btn2.addEventListener("click",()=>{
    console.log("button was clicked-handler4")
});
//remove eventlistener
btn2.removeEventListener("click",handler3)


