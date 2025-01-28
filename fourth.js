//Arrays in Java script

/*let marks=[97,84,76,93,23,21];
console.log(marks); 

let heroes=["ironman","superman","hulk","thor"];
heroes[2]="spiderman";
console.log(heroes);*/

//strings are immutable and arrays are mutable;

/*let heroes=["ironman","superman","hulk","thor","spiderman","shaktiman","batman"];
for(let idx=0;idx<heroes.length;idx++){
    console.log(heroes[idx])
};

let students=["ali","rehman","sufian","arsalan","zaid","ahmed","yasir"];
    for(let asi=0;asi<students.length;asi++){
        console.log(students[asi])
    };*/


   /* let cities=["karachi","sukker","islamabad","lahore","peshawar","multan","rawalpindi"];
    for(let city of cities){
        console.log(city.toUpperCase())
    };*/

    //let's practice

  /*  let marks=[85,97,44,37,76,60];
    let sum=0;

    for(let val of marks){
         sum += val;
    }

    let avg= sum/marks.length;
        console.log(`the average marks of the class =${avg}`)*/




     /*   let num=[96,87,25,68,59,49]
        let price=0;

        for(let key of num){
            price+=key;
        };
        let lowprice= price/num.length;
        console.log(`the lowprices is ${lowprice}`)*/

     /*   let items=[250,645,300,900,50];

        for(let i=0;i<items.length;i++){
        let offer=items[i]/10;
         items[i]-=offer;
        }
    console.log(items);

    let obj=[200.300,445,529,665,790];
    for(let a=0;a<obj.length;a++){
        let discount=obj[a]/10
        obj[a]-=discount;
    }
    console.log(obj);*/

    //push method

   /* let food=["mango","banana","stawberry","peach","orange","potato","tomato"];
       food.push("kiwi");
       console.log(food);*/

    //pop method
   /* let fooditems=["mango","banana","stawberry","peach","orange","potato","tomato"];
    console.log(fooditems);
         let deleteditem= fooditems.pop();
        console.log(fooditems);
        console.log("deleted",deleteditem);*/

        
    /*let fooditems=["mango","banana","stawberry","peach"];
    console.log(fooditems);
    console.log(fooditems.toString());

    console.log(fooditems);*/


    /*let marks=[86,46,45,67];
    console.log(marks);

    console.log(marks.toString());*/

    /*let marvelheroes=["captain america","thor","ironman"];
    let dcheroes=["superman","batman","spiderman"];
    let indianheroes=["flyingjutt","krish"];

    let heroes=marvelheroes.concat(dcheroes,indianheroes);
    console.log(heroes);*/

    /*let marvelheroes=["captain america","thor","ironman"];
    marvelheroes.unshift("antman");
    console.log(marvelheroes);*/

    /*let marvelheroes=["captain america","thor","ironman"];
    let val=marvelheroes.shift();
    console.log("deleted",val);
    console.log(marvelheroes);*/

    /*let marvelheroes=["captain america","thor","ironman","antman","spiderman","dr'strange"];
        console.log(marvelheroes);

        console.log(marvelheroes.slice(1,4));*/

    /*let arr=[1,2,3,4,5,6,7,8];
    arr.splice(2,3,99,100);
    console.log(arr);*/

    //add element
    /*let arr=[1,2,3,4,5,6];
    arr.splice(2,0,101);
    console.log(arr);*/
 
    /*let arr=[1,2,3,4,5,6];
    arr.splice(2,1);
    console.log(arr);*/

    /*let company=["bloomberg","microsoft","uber","google","ibm","netflix"];

    company.shift();
    console.log(company);*/

   /* let company=["bloomberg","microsoft","uber","google","ibm","netflix"];
    company.splice(2,1,"ola");
    console.log(company);*/

    let company=["bloomberg","microsoft","uber","google","ibm","netflix"];
    company.push("amazon");
    console.log(company);*/










    



