// object = A group of properties and methods
//                properties = what an object has
//                methods = what an object can do
//                use . to access properties/methods

// const car1 = {
//     model:"Mustang",
//     color:"red",
//     year:2023,

//     drive : function(){
//         console.log("You drive the car");
//     },
//     brake : function(){
//         console.log("You step on the brakes");
//     }
// }
// const car2 = {
//     model:"Corvette",
//     color:"blue",
//     year:2024,

//     drive : function(){
//         console.log("You drive the car");
//     },
//     brake : function(){
//         console.log("You step on the brakes");
//     }
// }

// console.log(car1.model);
// console.log(car1.color);
// console.log(car1.year);
// car1.drive();
// car1.brake();

// console.log(car2.model);
// console.log(car2.color);
// console.log(car2.year);
// car2.drive();
// car2.brake();

//-----------------------------------------------------------------
// this = reference to a particular object
//           the object depends on the immediate context

const car1 = {
    model:"Mustang",
    color:"red",
    year:2023,

    drive : function(){
    //a "this"-t object-eknél használjuk ahelyett, hogy kiírnánk az object nevét
    //ez esetben írhatnánk azt is, hogy "car1.model" és az is működne de ez általánosabb  
        console.log(`You drive the ${this.model}`);
    }
}
const car2 = {
    model:"Corvette",
    color:"blue",
    year:2024,

    drive : function(){
        console.log(`You drive the ${this.model}`);
    }
}
//ha egy object-en kívül próbáljuk meg használni a "this"-t akkor a "window"-hoz férünk hozzá nem pedig az object-ekhez
car1.drive();
car2.drive();