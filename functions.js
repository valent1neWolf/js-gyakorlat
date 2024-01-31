//funkcióba ágyazott funkció
startProgram();

//ha nem hívom meg a függvényt az elején, akkor nem fog máködni
function startProgram() {  //itt a ()-be nem kell semmit se írni,mivel benne hozom létre a változókat
    let userName = "Bro";
    let age = 21;

    happyBirthday(userName,age);    //mivel az értékek csak az adott funkcióban léteznek alapértelmezetten, ezért át kell őket passzolni
}

function happyBirthday(userName,age) {  //a sorrend számít
    console.log("Happy Birthday ",userName);
    console.log("You are now ",age, " years old!");
}

//return
// let area;
// let width;
// let height;

// width = window.prompt("Width size:");
// height = window.prompt("Height size:");

// area = getArea(width,height);

// function getArea(width,height) {
//     let result = width*height;
//     return result;
// }
// console.log("The area is: ",area);



//ternary operator
let adult = checkAge(17);
console.log(adult);


function checkAge(age) {
    return age >= 18 ? true : false;
    //ha az age nagyobb= mint 18, akkor igazat adjon vissza, ha pedig nem akkor hamisat
    //ugyan azt a funkciót látja el, mint egy szimpla "if else statement" 
}

let win =checkWinner(false);

function checkWinner(win) {
    win ? console.log("YOU HAVE WON!") : console.log("YOU HAVE LOST!");    
}


//--------------------------------------------------
// nested functions = Functions inside other functions.
//                                   Outer functions have access to inner functions.
//                                   Inner functions are "hidden" from outside.
//                                   used in closures (future video topic)
 
let userName = "Bro";
let userInbox = 0;

login();
//így a displayUserName(); és a displayUserInbox(); kívülről nem hívhatóak meg csak belülről
//ez egy biztonsági szintet ad
function login(){
    displayUserName();
    displayUserInbox();

    function displayUserName(){
        console.log(`Welcome ${userName}`);
    }
    function displayUserInbox(){
        console.log(`You have ${userInbox} new messages`);
    }
}