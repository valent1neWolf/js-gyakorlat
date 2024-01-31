//array = több változó tárolására használjuk

let fruits = ["apple","orange","banana"];
// fruits[0] = "coconut";

fruits.push("lemon"); //elem hozzáadása (azz array végére kerül)
fruits.pop();//elem törlése (utolsó)
fruits.unshift("mango");//elem hozzáadása (elejére)
fruits.shift();//elem törlése (első)
console.log(fruits);

let index = fruits.indexOf("apple");
console.log(index);

//loop through an array
let prices = [5,10,15,20,25];

// for (let index = 0; index < prices.length ; index++){
//     console.log(prices[index]);
// }


//ugyan az, mint a másik for loop, csak rövidebb
for (let price of prices){
    console.log(price);
}
//--------------------------------------------------------------------
let newFruits = ["banana", "apple", "orange", "mango"];

newFruits = newFruits.sort();
//fruits = fruits.sort().reverse();

for(let fruit of newFruits){
    console.log(fruit);
}