// let a;
// let b;
// let c;


// a = window.prompt("A oldal értéke:");
// a = Number(a);

// b = window.prompt("B oldal értéke:");
// b = Number(b);

// c = console.log(Math.sqrt(Math.pow(a,2) + Math.pow(b,2)));

// c = window.prompt("C oldal értéke:");
// c = Number(c);

let a;
let b;
let c;

document.getElementById("gomb").onclick = function cOldalSzamitas() {
    a=Number(document.getElementById("a_oldal").value);
    b=Number(document.getElementById("b_oldal").value);
    //ha pl. ge inputnak az értékét szeretnénk megszerezni, akkor a  ".value" operátort használjuk
    c=Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    document.getElementById("c_oldal").innerHTML = c.toFixed(2); 
}