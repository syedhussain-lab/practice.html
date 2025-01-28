    // classes in js


/*const student={
    fullName:"Hussain",
    marks:"43.5",
    printMarks:function(){
        console.log("marks=",this.marks)
    },
};*/
/*const employe={
    
    calculatetax(){
        console.log("tax is 10%")
    },
};

const karan={
    salary:50000,

};
karan.__proto__ = employe;

const karan2={
    salary:60000,
    calculatetax(){
        console.log("tax is 30%");
    }

};
karan2.__proto__ = employe;*/








                /* class toyotacar{
                    start(){
                        console.log("start")
                    }

                    stop(){
                        console.log("stop")
                    }
                    setbrand(brand){
                        this.brandname=brand;
                    }
                 };
                 let fortuner=new toyotacar;
                 fortuner.setbrand=("fortuner");
                 let lexus=new toyotacar;
                 lexus.setbrand=("lexus");*/
                             

                    
                 class toyotacar{
                          
                     constructor(brand,mileage){
                        console.log("creating new object")
                        this.brand=brand;
                        this.mileage=mileage;

                     }
                      
                    start(){
                        console.log("start")
                    }

                    stop(){
                        console.log("stop")
                    }
                   
                 };
                 let fortuner=new toyotacar("fortuner",12);
                 console.log(fortuner)
                 let lexus=new toyotacar("lexus",10);
                 console.log(lexus);
                                     
                                          
                                             class person{
                                                constructor(){
                                                    this.species="homo sapiens"

                                                }
                                                eat(){
                                                    console.log("eat")

                                                }
                                                sleep(){
                                                    console.log("sleep")
                                                }
                                                work(){
                                                    console.log("do nothing")
                                                }
                                             };

                                             class engineer extends person{
                                                work(){
                                                    console.log("solve problems,build something")
                                                }

                                             }
                                             class doctor extends person{
                                                work(){
                                                    console.log("treat patients")

                                                }
                                             }
                                             let ali=new engineer();
                                             let ahmed= new doctor();

                                             console.log(ali);
                                             console.log(ahmed);

                                                                  //super keyword
                                                                  class person2{
                                                                    constructor(){
                                                                        console.log("enter parent constructor")
                                                                        this.species="homo sapiens"
                                                                    }
                                                                    
                                                                    eat(){
                                                                            console.log("eat");
                                                                        }
                                                                  } ;
                                                                  
                                                                     
                                                                    class engineer2 extends person2{
                                                                        constructor(branch){
                                                                            console.log("enter child constructor")
                                                                             super();// to invoke parent class constructor 
                                                                            
                                                                            this.branch=branch;
                                                                            console.log("exit child constructor")
                                                                            }
                                                                        work(){
                                                                            console.log("solve problems")
                                                                        }
                                                                    };

                                                                    let newengg=new engineer2("electical engg");
                                                                    console.log(newengg)


                                                                    
                                                                  //super keyword
                                                                    class person3{
                                                                      constructor(name){
                                                                        this.species="homo sapiens"
                                                                        this.name=name;
                                                                    }
                                                                      eat(){
                                                                            console.log("eat");
                                                                        }
                                                                     } ;
                                                                     class engineer3 extends person3{
                                                                        constructor(name){
                                                                             super(name);// to invoke parent class constructor 
                                                                            }
                                                                        work(){
                                                                            super.eat()
                                                                            console.log("solve problems")
                                                                        }
                                                                    };

                                                                    let neweng=new engineer3("Hussain");
                                                                    console.log(neweng);

                      let DATA="secret information"
                      
                      class user{
                        
                        constructor(name,email){
                            
                            this.name=name;
                            this.email=email;
                         
                        }
                        viewData(){
                           
                            console.log("data=",DATA);
                        
                        };}

                        class admin extends user{
                              constructor(name,email){
                                super(name,email)
                              }

                            editData(){
                                DATA="new secret information";
                            }
                        }

                        let  student1=new user("Imran","imran@gmail.com");
                        let  student2=new user("Ali","ali@gmail.com");
                        let  teacher=new user("Alia","alii@gmail.com");

                        let admin1=new admin("admin","admin@gmail.com");

                       


                        console.log(student1.viewData());
                        console.log(student2.viewData());
                        console.log(teacher.viewData());

                        console.log(admin1.editData())




//try and catch error

let a= 5;
let b= 10;

console.log("a=",a);
console.log("b=",b);

console.log("a+b=",a+b);
console.log("a+b=",a+b);
try{
    console.log("a+b=",a+c);
}catch(err){
console.log(err)
}

console.log("a+b=",a+b);
console.log("a+b=",a+b);
console.log("a+b=",a+b);
console.log("a+b=",a+b);


                        


