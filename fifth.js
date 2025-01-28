//functions and method


/*function myFunction(){
    console.log("Hello world!;)");
    console.log("we are learning js:)");
}
myFunction();
myFunction();*/

/*function myFunction(msg){
console.log(msg);
}
console.log("hello world");*/

/*function sum(x,y){
    he=(x+y);
    return he;
}
let val= sum(4,6);
console.log(val);*/


/*function sum(a,b){
    s=(a/b);
    return s;
};
let her=sum(4,4);
console.log(her);*/

/*function sum(b,c){
    fu=(b-c);
    return fu;

}
let his= sum(3,9)
console.log(his);*/

/*function sum(a,b){
    s=(a+b);
    console.log("befor return");
    return s;
    console.log("after return");
}
let value=sum(3,5);
console.log(value);*/



/*function sum(a,b){
    sum=(a+b);
    console.log("before return")
    return sum;
}
            let g=sum(3,3);
            console.log(g)     */                 
                                          

//arrow function

                             /* const arrowsum=(a,b)=>{
                                console.log(a-b)
                              }
                              let val=arrowsum(6,3);
                              console.log(val);*/

                                                          
                                              /* const sure=(a,b)=>{
                                                console.log(a+b);
                                               }
                                               let value=sure(3,8);
                                               console.log(value);*/



                                            /*   const him=(c,d)=>{
                                                return(c*d);
                                               }
                                               let her=him(4, 4);
                                               console.log(her);*/

                                                        /*  const printhello=()=>{
                                                            console.log("hello world"); 
                                                          };*/

         /* function countvowels(str){
            let count=0;
               for(const char of str){
                if(
                    char === "a"||
                    char === "e"||
                    char === "i"||
                    char === "o"||
                    char === "u"

                ) {
                    count++;
                }

               }
               return count;
          }*/

       /*   const countvow =(str) => {
            let count=0;
               for(const char of str){
                if(
                    char === "a"||
                    char === "e"||
                    char === "i"||
                    char === "o"||
                    char === "u"

                ) {
                    count++;
                }

               }
               return count;
          }*/
                                   /*let arr=[1,2,3,4,5,6,7];
                                           arr.forEach(function prinval(val){
                                            console.log(val)
                                           });*/

                                         /* let arr=["karachi","islamabd","multan"];
                                           arr.forEach((val)=>{
                                            console.log(val)
                                           });*/


                                           /*let arr=["a","b","c"];
                                           arr.forEach(function prinval(val){
                                            console.log(val)
                                           });*/

                                          /* let arr=["karachi","isl","lahore"];
                                           arr.forEach((val,idx,arr)=>{
                                            console.log(val.toUpperCase(),idx,arr);
                                           });*/


                                          /* let num=[2,4,5,6,7];

                                           num.forEach((num)=>{
                                            console.log(num*num);//num**2
                                           });*/


                                          /* let arr=[1,3,4,5,6];
                                           arr.forEach((arr)=>{
                                            console.log(arr+arr);
                                           })*/



                             /*   let num=[2,4,6,8,10];

                                num.map((val)=>{
                                    console.log(val)
                                });*/



                                      /* let sure=[2,4,5,6,7,8];

                                      let newsure=sure.map((val)=>{
                                        
                                        return val*val;
                                       })
                                       console.log(newsure)*/

                                      /* let arr=[1,2,3,4,5,6,7,8,9,10];
                                       
                                       let neWarr=arr.filter((val)=>{
                                        return val %2===0;
                                       })
                                       console.log("even",neWarr);*/


                                      /* let are=[1,2,3,4,5,6,7,8,9,10];

                                       let neware=are.filter((val)=>{
                                        return val% 2 !== 0
                                       })
                                       console.log("odd",neware);*/


                                     /*  let arr=[1,3,4,5,6,7,8];

                                       const output= arr.reduce((prev,curr)=>{
                                        return prev+curr;

                                       });
                                       console.log(output);*/

                                       /*let arre=[1,2,3,4,5,6,7,8]

                                       const input=arre.reduce((prev,curr)=>{

                                        return prev>curr ? prev: curr;
                                       })

                                        console.log(input);*/


                                        /*let arr=[89,90,97,95,65,47]

                                        let input=arr.filter((val)=>{
                                            return val >= 90
                                        })
                                        console.log(input);*/


                                        let n=prompt("give a number");

                                        let arr=[];
                                        for(let i=1;i<=n; i++){
                                            arr[i-1]=i;
                                            
                                        }
                                        console.log(arr);

                                         let sum=arr.reduce((res,curr)=>{
                                            return res+curr;
                                        });
                                        console.log("sum",sum);

                                        let calculate=arr.reduce((res,curr)=>{
                                            return res*curr;
                                        });
                                        console.log("calculation of all numbers in the array",calculate);






                                                          

