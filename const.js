// const =  a variable that can't be changed
//csak akkor ha valamit biztos nem akarunk megváltoztatni
const PI = 3.14159; //a konstans elemeket gyakran csupa nag ybetável írják
let radius;
let circumference;
// PI =420.69;

radius =window.prompt("Mekkora legyen a kör sugara?");
circumference = 2 * PI * Number(radius);
console.log(circumference);


//let = block-okon kívül (pl.if, function) nem használhatóak
//var = funckión kívül nem használhatóak, de if-en kívül igen

//var-al vigyázni kell mivel olyan dolgokat is megváltoztathatunk vele,amiket nem is akarnánk és így problémákat okozhat (pl. var name;)
//let használata ajánlott
