let username;
document.getElementById("myButton").onclick = function name() {
    username = document.getElementById("nev").value;    
    //ha pl. ge inputnak az értékét szeretnénk megszerezni, akkor a  ".value" operátort használjuk
    console.log(username);
    document.getElementById("szoveg").innerHTML = "Szia " + username; 
}
//a különbség az .innerHTML és a .value között,
//hogy míg az .innerHTML írási folyamaot végez a .value olvasásit


let age = window.prompt("Hány éves vagy?");
console.log(typeof age);
//Fontos megjegyezni, hogy a felhasználó által megadott szöveg alapértelmezetten string,
//ezért ezt át kell konvertálni
age = Number(age); //String()/Boolean()
console.log(typeof age);
age +=1;

alert("Boldog " + age + ". szülinapot!");



// let username = window.prompt("Mi a neved?");
// console.log(username);