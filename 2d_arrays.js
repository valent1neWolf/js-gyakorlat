let fruits = ["alma","banán","narancs"];
let vegetables = ["répa","hagyma","krumpli"];
let meats = ["tojás","csirke","hal"];

let groceryList = [fruits,vegetables,meats];

groceryList [2][0] = "marha";

for (let list of groceryList){
    for (let type of list){
        console.log(type);
    }   
}


//----------------------------------------
//spread operator

let numbers = [1,2,3,4,5,6,7,8,9];
let maximum = Math.max(...numbers); //ha nem tennénk elé a "..."-t akkor nem kezelné őket különálló számnak
console.log(maximum);


let class1 =["Spongebob", "Patric", "Sandy"];
let class2 =["Squidward", "Krabs", "Plankton"];

class1.push(...class2); //kell ahhoz, hogy az egyik array elemeit bele tudjuk helyezni a másik array elemeihez

console.log(class1);


//----------------------------------------
//rest parameters = ha változtatunk a funkció megvásában szereplő változók összetételén, vagy számám
//akkor ne kelljen aómagán a funkción is változtatni

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a,b,c,e));

function sum(...numbers) {
    let total = 0;
    console.log(numbers);       //egy array-be[] rakja azokat a változókat,amik majd meghívásra kerülnek a függvényben
    for( number of numbers){
        total+=number;
    }
    return total;
}