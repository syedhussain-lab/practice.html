// const URL="https://cat-fact.herokuapp.com/facts"

// const getpara=document.querySelector("#fact")
// const btn=document.querySelector("#btn");

// let getfact=async()=>{
//    console.log("getting data .....")
//    let response=await fetch(URL);
//    console.log(response)
//    let data= await response.json();
//    console.log(data)
//    getpara.innerText=data[4].text;
// }
// btn.addEventListener("click",getfact)

// /*AJAX METHOD:IS ASYNCHRONUS JS & XML
// JSON METHOD:IS JS OBJECT NOTATION:RETURN SECOND PROMISE*/

// //json();

const BASE_URL =
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

  const dropdowns=document.querySelectorAll(".dropdown select");
  const btn=document.querySelector("form button");
  const fromCurr=document.querySelector(".form select");
  const toCurr=document.querySelector(".to select");
  const msg=document.querySelector(".msg");



  for (let select of dropdowns){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name==="from"&& currCode==="USD"){
            newOption.selected="selected";
        }else if(select.name==="to"&& currCode==="PKR"){
            newOption.selected="selected";
        }
        select.append(newOption);

        select.addEventListener("change",(evt)=>{
           updateflag(evt.target)
        })
    }
  }
   const updateflag=(element)=>{
    let currCode=element.value;
    let countrycode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;
   }
   

   btn.addEventListener("click",async(evt)=>{
    evt.preventDefault();
    let amount=document.querySelector(".amount input")
    let amtVal=amount.value;
    if(amtVal===""|| amtVal<1){
        amtVal=1;
        amount.value="1"
    }
    const URL=`${BASE_URL}/${fromCurr}/${toCurr}.json`;
    let response=await fetch(URL)
    let data= await response.json();
    let rate=data[toCurr]
    
    let finalAmount= amtVal* rate;
    msg.innerText =`${amtVal}${fromCurr} = ${finalAmount} ${toCurr}`
    
   })
  