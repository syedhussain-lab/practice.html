let h2=document.querySelector("h2");
console.log(h2.innerText
);

h2.innerText=h2.innerText+"from apna college";


let divs=document.querySelectorAll('.box');
console.log(divs[2]);

let idx=1;
for(div of divs){
    div.innerText=`new value ${idx}`
    idx++;
}

divs[2].innerText="new value 1";
