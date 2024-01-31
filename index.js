//A variable-ket adatok tárolására használjuk

//2 lépés:
// 1. Deklaráció (var,let,const)
// 2. Hozzárendelés (a kívánt érték)
// Ezt a 2 műveletet egyszerre vagy külön is el lehet végezni.


let age=21;//number
let firstName = "Valentine";//string
let lastName = "Wolf";
let student = true; //boolean
console.log(age);


//a tag-et az id-jén keresztül "fogjuk meg" 
//innerHTML-vel változtatjuk meg a HTML szöveg tartalmát
document.getElementById("p1").innerHTML = "Hello " + firstName + " " + lastName;
document.getElementById("p2").innerHTML = "You are " + age + " years old.";
document.getElementById("p3").innerHTML = "Enrolled:" + student;


