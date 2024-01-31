// for loop =tudjuk hányszor akarjuk megismételni (nem esetlegesen végtelen)

for (let i = 10; i > 0; i-=2){
   console.log(i);
}

console.log("Happy new year!");

for (let i = 1; i < 20; i++){
    if (i==13) {
        continue;
    }
    
    console.log(i);
 }

 console.log("Nested loop...");


 
for (let i = 1; i <= 3; i++){
    console.log(i,"i-hez tartozik");
    for (let j = 1; j <= 3; j++){
        console.log(j, "j-hez tartozik");
     }
 }

let columns = window.prompt("How many columns would you like for the rectangle?");
let rows = window.prompt("And how many rows?");

 for (let i = 1; i <= rows; i++){
    for (let j = 1; j <= columns; j++){
        document.getElementById("rectangle").innerHTML +="*";
     }
     document.getElementById("rectangle").innerHTML +="<br>";
 }