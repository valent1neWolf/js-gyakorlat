let text = "<h1>Winter is coming</h1><p>Game of Thrones</p>";
let myRegex = /<.*?>/g; // ez esetben mindegy,hogy + vagy * van használva mert a > ígyis úgyis meggátolja, hogy tovább kerssen
// a ? biztosítja, hogy ne legyen greedy, vagyis hogy a lehető legrövidebb szöveget adja vissza
let result = text.match(myRegex);
console.log(result);

//itt a a ^ azt jelenti, hogy a string elején kell lennie a megadott kifejezésnek és nem ignorálásra használjuk, mint előzőleg
//csak akkor találja meg, ha a string elején van
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
console.log(firstRegex.test(firstString));
let notFirst = "You can't find Ricky now.";
console.log(firstRegex.test(notFirst));

//ennnek a fordítottja a $, azaz a string végén kell lennie a kifejezésnek
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
console.log(storyRegex.test(theEnding));
let noEnding = "Sometimes a story will have to end";
console.log(storyRegex.test(noEnding));


//összes kis nagybetű,számok és aláhúzásjel
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
console.log(shortHand.test(numbers));
longHand.test(varNames);
shortHand.test(varNames);


let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result2 = quoteSample.match(alphabetRegexV2).length;
console.log(result2);


//ennek ellentetje a \W, azaz minden ami nem kis vagy nagybetű, szám vagy aláhúzásjel pl.(, ., -, !, stb.)
let quoteSample2 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result3 = quoteSample2.match(nonAlphabetRegex).length;
console.log(result3);
console.log(quoteSample2.match(nonAlphabetRegex));


//csak a számok = \d
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result4 = movieName.match(numRegex).length;
console.log(result4);
console.log(movieName.match(numRegex));

//megint csak ennek az ellentéte a \D, azaz minden ami nem szám
let movieName2 = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result5 = movieName2.match(noNumRegex).length;

//példa
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/restrict-possible-usernames
// Usernames can only use alphanumeric characters.

// The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

// Username letters can be lowercase and uppercase.

// Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
let username = "JackOfAllTrades";
let userCheck = /^[a-zA-Z][a-zA-Z]+[0-9]*$|^[a-zA-Z]+[0-9]{2,}$/i; // Change this line
let result6 = userCheck.test(username);
console.log(result6);

//szóközök keresése
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result7 = sample.match(countWhiteSpace);
console.log(result7);

//szóközök kivétele (minden ami nem szóköz)
let sample2 = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result8 = sample2.match(countNonWhiteSpace);
console.log(result8);

//specifikus számú karakter keresése
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);
// The first test call would return true, while the second would return false.


//{szám,korlátlan} = {szám,} = legalább szám darabnak kell lennie
// let A4 = "haaaah";
// let A2 = "haah";
// let A100 = "h" + "a".repeat(100) + "h";
// let multipleA = /ha{3,}h/;
// multipleA.test(A4);
// multipleA.test(A2);
// multipleA.test(A100);

//pontosan meghatározott számú karakter keresése
// let A4 = "haaaah";
// let A3 = "haaah";
// let A100 = "h" + "a".repeat(100) + "h";
// let multipleHA = /ha{3}h/;
// multipleHA.test(A4);
// multipleHA.test(A3);
// multipleHA.test(A100);

//van amikor nem vagyunk biztosak benne, hogy egy szóban egy karakter kell-e, ezért kérdőjelet teszünk a karakter után és így elfogadjuk azzal és a nélkül is
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
console.log(rainbowRegex.test(american));
console.log(rainbowRegex.test(british));

//Positive and Negative Lookahead
// pozitív előretekintés = (?=...)
// negatív előretekintés = (?!...)
// akkor használjuk, ha egy kifejezésnek kell/nem szabad előfordulnia, de nem akarjuk, hogy a visszatérési értékben szerepeljen

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\D*\d{2,}\D+|\D+\d{2,}\D*)/; // \D*\d{2} -> nem szám karakter amit pontosan 2 szám követ vagyis nem baj az, hogyha van olyan szám ami magában van,de kell olyannak is lennie 2db számnak 
//ami egymást követ  pl. 1alma12, kis15kutya, stb.
let result9 = pwRegex.test(sampleWord);

//másik megoldás
///(?=\w{6})(?=\w*\d{2})/
//(?=\w{6}) = 6 karakternek meg kell lennie(lehet több is, ez csak a minimum ebben az esetben)
//(?=\w*\d{2}) = 0 vagy több karakternek kell lennie, majd 2 számnak (ez csak azt határozza meg, hogy a stringben kell lenni. hogy két szám követi egymást,de nem azt, hogy több nem lehet egymás után)
//vagyis az 123456 is jó megoldás
