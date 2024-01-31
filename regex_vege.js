let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
console.log(testRegex.test(testStr));

//példa rá
// Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.

// Then fix the code so that the regex that you have created is checked against myString and either true or false is returned depending on whether the regex matches.
let myString = "Eleanor Roosevelt";
let myRegex = /(Eleanor|Franklin)( .*)? Roosevelt/; 
let result = myRegex.test(myString); 
console.log(result);


//amikor nem tudjuk, hogy mi isétlődik,de akarjuk, hogy ismétlődjön megadott alkalommal, amit a \1-el tudunk megadni (a szám  az alapján van, hogy hányadik zárójelben van)
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; // pontosan 3 ismétlődést fogad el a kezdésnek és a lezárásnak köszönhetően
let result2 = reRegex.test(repeatNum);
console.log(result2);

let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test("row row row"); // Returns true
console.log("row row row row".match(repeatRegex)); // Returns ["row row row", "row"]

//hasznos kis cucc (?!.) ami nem engedi, hogy a kifejezés után bármi legyen
//hasonlít a $-ra, de nem kell a végére tenni


//kicserélés
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");

//meg lehet adni, hogy milyen sorrendben cserélje fel a kifejezéseket
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result3 = str.replace(fixRegex, replaceText);
console.log(result3);

//tüntessük el a kettő és annál hosszabb whitespace-eket
let hello = "   Hello, World!  ";
let wsRegex = /(\s+){2,}/g; // Change this line
let result4 = hello.replace(wsRegex,""); // Change this line
console.log(result4);