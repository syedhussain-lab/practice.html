// loops in js
/*for(let count=1;count <=100;count++){
    console.log("syed hussain")
}
console.log("loop has ended")*/

/*let sum=0
for(let i=1;i<=5;i++){
    sum=sum+i
}
console.log(
    "sum=",sum
)*/

/*for(let i=1;i<=5;i++){
    console.log(
        "i=",i  
    )
}*/

//for of loop

/*let str="syedhussain"

let size=0


for(let i of str){
    console.log("i =",i)
    size++;

}
console.log("string size=",size)*/



/*let str="javascript"
let length=0
for(let a of str){
    console.log("a=",a)
    length++;
}
console.log(
    "string length=",length
)*/

// for in loops

/*let student={
    name:"syed hussain",
    age:19,
    cgpa :8.4,
    ispass:true,
};
for(let key in student){
    console.log("key=",key,"value=",student[key])
}*/

//practice questions

/*for(let num=0;num<=100;num++){
    if(num%2===0){
        console.log("num=",num)
    }
}*/
//practice question 2
          /*  let gamenum=25
            let usernum=prompt("guess the number")

            while(usernum != gamenum){
                usernum=prompt("Wrong guess!please try again")
            }
            console.log("Congratulations you entered the rhe right answer")*/


//strings in js

//let str="apna college";
//console.log(str[3]);


//template literal

/*let specialstring=`this is template literal`;
console.log(specialstring);*/
 

/*let obj={
    item:"pen",
    price:"10",

};
let output=(`the cost of a ${obj.item} is ${obj.price} rupees`);
console.log(output);


let box={
    item:"glass",
    price:"300",
    item2:"jar",
    price2:"200",
};

let input=(`The price of a ${box.item} is ${box.price} rupees and the cost of ${box.item2} is ${box.price2} rupees.`);
console.log(input);*/


//console.log("apna\ncollege");

//console.log("apna\tcollege");

//let specialstring=`apna college ${1+2+3}`;
//console.log(specialstring)

/*let str="apna college";
str=str.toLocaleUpperCase();

console.log(str);*/

/*let str="apna college";
let newStr=str.toUpperCase();
console.log(str);
console.log(newStr);*/

/*let str="apna college";
let newStr=str.toLowerCase();
console.log(newStr);*/

//let str="     Apna college js    ";
//console.log(str.trim());

/*let str="123 college";
console.log(str.slice(2,10));*/


/*let str1="apna ";
let str2="college";

let res=str1.concat(str2);
console.log(res);*/


/*let str1="apna";
let str2="college";

  let res="I'm learning coading from "+str1 + str2;
  console.log(res);*/


  /*let str="hello";

  console.log(str.replace("lo","p"));*/


  /*let str="hellololo";

   console.log(str.replaceAll("lo","p"));*/

       
/*let str="ilovejs";
        
console.log(str.charAt(5));*/

let fullname=prompt("enter you full name without space");

let username="@"+fullname+fullname.length;

console.log(fullname);
console.log(username);




//loop do while

/*let i=1;
do{
    console.log("apna college");
    i++;
}while(i<=5);*/









