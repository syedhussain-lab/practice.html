//Asynchronous

// console.log("hello wolrd1");
// console.log("hello wolrd2");

// setTimeout(()=>{
//       console.log("Asynchronous hello world5");

// },1000);


// console.log("hello wolrd3");
// console.log("hello wolrd4");

/*callback
function sum(a,b){
   console.log(a+b);

}
function calculator(a,b, sum){
    sum(a,b);
}
calculator(1,2, sum);*/

//callback hell

// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data=",dataId)
//         getNextData();
//     },2000)
    
// }
// getData(1,()=>{
//     console.log("getting data2..")
//       getData(2,()=>{
//     console.log("getting data3...")
//         getData(3,()=>{
//     console.log("getting data4....")

//             getData(4,()=>{

//             });

//         });

//       });

// });



//Promises {pending,resolve(fulfilled),rejected}

// const getPromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("Iam a promise")
//          resolve("success")
//         //reject("error")
//     })
// };
// let promise=getPromise();
// promise.then((res)=>{
//           console.log("promise fulfilled")
// });
// promise.catch(()=>{
//     console.log("error network")
// });




    
//promise chaining







// function asyncfunc(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log("data1")
//         resolve("success")
//         },4000);
//     });
// };


// function asyncfunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log("data2")
//         resolve("success")
//         },4000);
//     });
// };

// console.log("fetching data1...")
// let p1=asyncfunc();
// p1.then((res)=>{
    
// console.log("fetching data2...");
// let p2=asyncfunc2();
// p2.then((res)=>{})

// });

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success")
        },4000)
    })
}
// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res)
//     })
// })


console.log("getting data1....")
getData(1).then((res)=>{
    console.log("getting data2....")
    return getData(2)
    
}).then((res)=>{
    console.log("getting data3....")

   return getData(3)
   
}).then((res)=>{
    console.log(res)
})

/*callback
callback hell
promises*/




