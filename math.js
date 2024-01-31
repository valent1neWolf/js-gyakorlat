let x1 = 3.94;
let x2 = 3.94;
let x3 = 3.14;
x1 = Math.round(x1);//normálisan kereít
x2 = Math.floor(x2);//mindig lekerekít
x3 = Math.ceil(x3);//mindig felkerekít
// x3 = Math.pow(x3,2);//hatvány
// x3 = Math.sqrt(x3);//gyök
let x4 = Math.abs(-30);//abszolút érték
let maximum = Math.max(x1,x2,x3,x4);
let minimum = Math.min(-2,x2,x3,x4); 

const y= Math.PI;

console.log(x1);
console.log(x2);
console.log(x3);
console.log(x4);
console.log(maximum);
console.log(minimum);
console.log(y);