// Url: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/using-the-test-method
//.test() = Egy bizonyos kifejezés megkeresése egy stringben. Visszatérési értéke true vagy false.
//a kifejezést // közé kell tenni, és a stringet a .test() metódusba.

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
console.log(result);

//többet is kereshetünk egyszerre

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // valamelyik közülük(OR)
let results = petRegex.test(petString);
console.log(results);


let myString1 = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // i = case insensitive vagyis nem számít a kis és nagybetű, ugyan annak veszi
let result1 = fccRegex.test(myString1);
console.log(result1);


//match() = egy stringben lévő kifejezést keres, és visszaadja a megtalált kifejezést, ha nem talál semmit akkor null-t ad vissza
//lényegében a .test()-nek a forrdítottja

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result2 = extractStr.match(codingRegex); 

console.log(result2);

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // g = global(többet keressen), i = case insensitive(nincs kis és nagybetű)
let result3 = twinkleStar.match(starRegex); // Change this line
console.log(result3);

//. = bármilyen karaktert jelent, csak azt nézi, hogy a pontot megelőző szöveg megegyezik-e a többire meg bármit elfogad (de mindenképp kell valaminek lennie utána ami nem "space")
//ezt lehet fordítva is, hogy hamarabb írom a pontot és utána a többi karaktert pl. /.un/ = hun, sun, fun, run, stb.
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
let hu1 = huRegex.test(humStr);
let hu2 = huRegex.test(hugStr);
console.log(hu1);
console.log(hu2);

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result4 = quoteSample.match(vowelRegex); // Change this linea
console.log(result4,result4.length);


//karakter intervallumot is meg lehet adni, pl. [a-e] = a,b,c,d,e
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
console.log(catStr.match(bgRegex)); 
console.log(batStr.match(bgRegex)); 
console.log(matStr.match(bgRegex)); 

//számokat is meg lehet adni
// let jennyStr = "Jenny8675309";
// let myRegex = /[a-z0-9]/ig;
// jennyStr.match(myRegex);

let quoteSampleno = "3 blind mice.";
let myRegexno = /[^aeiou0-9]/gi; // ^ = negálás, azaz nem tartalmazza a megadott karaktereket
let result5 = quoteSampleno.match(myRegexno);
console.log(result5,result5.length);

// + = a megadott karakternek legalább egyszernek kell előfordulnia
let difficultSpelling = "Mississippis";
let text = /s+/g; // Change this line
let result6 = difficultSpelling.match(text);
console.log(result6,result6.length);


//* = legalább a keresett karakterek elejének elő kell fordulnia a szövegben
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
console.log(soccerWord.match(goRegex));
console.log(gPhrase.match(goRegex));
console.log(oPhrase.match(goRegex));
