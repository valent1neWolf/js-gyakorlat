//array.forEach() = executes a provided callback function
//                              once for each array element

let students = ["spongebob", "patrick", "squidward"];
students.forEach(capitalize);//külön egy forEach-ben első betűket naggyá tesszük
students.forEach(print);    //és külön egy forEach-ben pedig kinyomtatjuk őket

function capitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element){
    console.log(element);
}

//----------------------------------------------------------------

//array.map() = executes a provided callback function
//                         once for each array element
//                         AND creates a new array

let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(square);
let cubes = numbers.map(cube);

numbers.forEach(print);
console.log("---");
squares.forEach(print);
console.log("---");
cubes.forEach(print);

function square(element){
    return Math.pow(element, 2);
}
function cube(element){
    return Math.pow(element, 3);
}
function print(element){
    console.log(element);
}


//---------------------------------------------------------------
//array.filter() = creates a new array with all elements 
//                         that pass the test provided by a function
//ez is lényegében végig loop-ol az össszes elemen az array-ban
let ages = [18, 16, 21, 17, 19, 90];
let adults = ages.filter(checkAge);

adults.forEach(print);

function checkAge(element){
    return element >= 18;
}
function print(element){
    console.log(element);
}


//---------------------------------------------------------------

//array.reduce() = reduces an array to a single value            

let prices = [5, 10, 15, 20, 25, 30];
let total = prices.reduce(checkOut);

console.log(`The total is: $${total}`);

function checkOut(total, element){
    return total + element;
}

//---------------------------------------------------------------

let grades = [100, 50, 90, 60, 80, 70];

grades = grades.sort(descendingSort);   //arrays.js-ben már használtuk

grades.forEach(print);

function descendingSort(x, y){  //csökkenő
    return y - x;   //mindig 2 értéket hasonlít össze
}
function ascendingSort(x, y){   //növekvő
    return x - y;
}
function print(element){
    console.log(element);
}


// sort() = method used to sort elements of an array in place.
//               Sorts elements as strings in lexicographic order, not alphabetical
//               lexicographic = (alphabet + numbers + symbols) as strings

// ---------- EXAMPLE 1 ----------
// const numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

// numbers.sort((a, b) => a - b); //FORWARD
// numbers.sort((a, b) => b - a); //REVERSE

// console.log(numbers);

// ---------- EXAMPLE 2 ----------
const people = [{name: "Spongebob", age: 30, gpa: 3.0},
                            {name: "Patrick", age: 37, gpa: 1.5},
                            {name: "Squidward", age: 51, gpa: 2.5},
                            {name: "Sandy", age: 27, gpa: 4.0}]

people.sort((a, b) => a.age - b.age); //FORWARD
people.sort((a, b) => b.age - a.age); //REVERSE

people.sort((a, b) => a.gpa - b.gpa); //FORWARD
people.sort((a, b) => b.gpa - a.gpa); //REVERSE

people.sort((a, b) => a.name.localeCompare(b.name)); //FORWARD
people.sort((a, b) => b.name.localeCompare(a.name)); //REVERSE

console.log(people);
//-----------------------------------------------------------------
let greetings = ["Hello","Welcome","Hi","Greetings","Nice to see you"];
let emberek = ["Josh","Jani","Juan","Pepszi","Pözsó","Kolbász"];

greetPeople();

function randomGreeting() {
    let greeting = greetings[Math.floor(Math.random()*greetings.length)];

    return greeting;   
}

function greetPeople() {
    emberek.forEach(person => {
        let greeting = randomGreeting(); 
         console.log(`${greeting} ${person}`);  //magát a funkciót meghívhatnám a greeting helyébe, de így hogy adok neki egy változót talán elegánsabb    
    });
     
}

console.log("-----");
//-------------------------------------------------------------
const udvozles = (nev) => {
    console.log(`Szia ${nev}`);
}

udvozles("Balint");

const jegyek = [100, 50, 90, 60, 80, 70];
//anonymus function-t használunk (így nem kell return-ölni) nyilak segítségével (rövidebb a kód)
jegyek.sort((x, y) => y - x);   //ezt rövidítsük le erre az egy sorra
// function descendingSort(x, y){  //csökkenő
//     return y - x;   
// }
jegyek.forEach((jegy) => console.log(jegy));