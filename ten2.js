//async await
function api(){
    return new Promise((resolve,reject)=>{
        setTimeout((res)=>{
            console.log("weather data");
            resolve(200)

        },2000)
    })
}
async function getweatherdata(){
    await api();
    await api();

}

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success")
        },2000)
    });
};

async function getalldata(){
    console.log("getting data 1....")
    await getData(1);
    console.log("getting data 2....")
    await getData(2);
    console.log("getting data 3....")
    await getData(3);
    console.log("getting data 4....")
    await getData(4);
    console.log("getting data 5....")
    await getData(5);

}

//IIFE
//Immediately invoked funciton expression:

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success")
        },2000)
    });
};

(async function getalldata(){
    console.log("getting data 1....")
    await getData(1);
    console.log("getting data 2....")
    await getData(2);
    console.log("getting data 3....")
    await getData(3);
    console.log("getting data 4....")
    await getData(4);
    console.log("getting data 5....")
    await getData(5);

})();

/*    
(function(){
})();
*/
