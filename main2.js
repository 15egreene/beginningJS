//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
};
let keys = Object.keys(person3)
let val = Object.values(person3['shakes'][0])
let val1 = Object.values(person3)




val1.forEach((val1) => {
    console.log(` ${val1}`)
});



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/
class Wife {
    constructor(name, age){
        this.name = name;
        this.age=age++;
    }
    printInfo(){
        console.log(`${this.name} is ${this.age} years old.`)
    }    
}

let rique = new Wife('Enrique', 25);
rique.printInfo();


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/


let numCheck = string => {
    return new Promise((resolve,reject) => {
        if (string.length > 10){
            console.log('Big word');
            resolve(string); 
        } else {
            console.log('small number')
            reject(string);
        }
    })
}

numCheck('Superman').then((result) => {console.log('it works i think')}).catch((result) => {console.log(`this doesnt work`)});