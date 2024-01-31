//metódusok egymás utáni hłvosgatása


let userName = "bro";


let letter = userName.charAt(0).toUpperCase();  //kell a zárójel a végére
userName = letter + userName.slice(1,userName.length);

console.log(userName);