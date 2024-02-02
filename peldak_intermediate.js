//adja vissza a tömb két eleme közötti számok összegét(beleértve a két számot is)
function sumAll(arr) {
    arr = arr.sort((a, b) => a - b)
//   console.log(arr)
  let osszeg = 0;
  for(let i=arr[0];i<=arr[1];i++){
    osszeg+=i;
  }
  return osszeg;
  }
  
  console.log(sumAll([1, 4]));
  console.log(sumAll([10, 5]));
  console.log(sumAll([5, 10]));

console.log("--------------------------------------------------")
  //-------------------------
  //listázza azokat az elemket,amik az csak egyszer fordulnak elő a két tömbben
  function diffArray(arr1, arr2) {
    const newArr = arr1.concat(arr2).filter(isDupicate);
    function isDupicate(value,index,array){
      return array.indexOf(value) === array.lastIndexOf(value);
    }
    return newArr;
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));    //[4]
  console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));
  console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));

  console.log("--------------------------------------------------");
  //---------------------------------------------------------------------------------
  //kiszedjük az array-ből azokat az elemeket, amik attribútumként lettek megadva az array után a függvényben

  function destroyer(...arr) {
    let [firstArray, ...rest] = arr;
    let numbers = rest;
    // console.log(numbers)
    for(let i=0;i<numbers.length;i++){
     firstArray = firstArray.filter((szam) => szam!=numbers[i])
    }
    return firstArray;
  }
  
  const result = destroyer([3, 5, 1, 2, 2], 2, 3, 5);
  console.log(result);
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
  console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));

  console.log("--------------------------------------------------");
  //---------------------------------------------------------------------------------
  //ellenőrizni kell, hogy a megadott tömbben található objectekben van-e olyan attribútum, amit a source-ban megadtunk és azok értékei egyeznek-e
  function whatIsInAName(collection, source) {
    return collection.filter(elem => {  //fillter segítségével végig iterálunk a collection tömbön
      return Object.entries(source).every(([key, value]) => elem.hasOwnProperty(key) && elem[key] === value);
    }); //entries() kulcs value párokat ad vissza egy tömbben, amit kényelmessen megint csak key value-nak nevezünk az every()-ben
  }//mivel a filternek true vagy false kell az elemekhez, hogy tudja, hogy melyiket hagyja bent a tömbben, az every pedig pont ezt adja vissza, ami így jól jön ki
  //az entries feldarabolja a source és egyenként ellenőrzi a collection tömb elemeit, hogy van-e ilyen attribútumuk(elem.hasOwnProperty(key)) és az értéke is egyezik-e (elem[key] === value) 
  
  
  
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
  console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }))



    console.log("--------------------------------------------------");
    //---------------------------------------------------------------------------------

    //spinal tab case
  
    function spinalCase(str) {
        str = str.replace(/([A-Z])/g, ' $1').trim().split(/[\s_]+/).join("-").toLowerCase();
         //lehet van valami egyszerűbb megoldás is, de ez működik
        return str;
      }
      
      console.log(spinalCase('This Is Spinal Tap'));
      console.log(spinalCase("The_Andy_Griffith_Show"))
      console.log(spinalCase("thisIsSpinalTap"))

    console.log("--------------------------------------------------");
    //--------------------------------------------------------------------------------
      //pig latin
      //ha a szó elején van magánhangzó, akkor a szó végére hozzá kell tenni a "way" szót
      //ha a szó elején van mássalhangzó, akkor a mássalhangzókat a szó végére kell tenni és utána a "ay" szót
      //ha a szóban nincs magánhangzó, akkor a szó végére kell tenni az "ay" szót
      //pl. "consonant" -> "onsonantcay"
      function translatePigLatin(str) {
        let vowels =["a","e","i","o","u"];
        let word = str.split("");
        let index = isItVowel();
        function isItVowel(){
          for(let i = 0;i<word.length;i++){
            if(vowels.includes(word[i])){
              return i;
            } else if(i==word.length-1){
              return word.length;
            }
          }
        }
        if(index ==0){
          str = str + "way";
        } else if(index ==str.length){
          str+="ay" 
        } else{
          str = str.slice(index) + str.slice(0,index) + "ay";
          
        }
        // console.log(index)
        // console.log(word)
        // console.log(str)
        return str;
      }
      
      console.log(translatePigLatin("consonant"));
      console.log(translatePigLatin("eight"));
      console.log(translatePigLatin("schwartz"));
      console.log(translatePigLatin("rhythm"));

console.log("--------------------------------------------------");
//--------------------------------------------------------------------------------

//search and replace
//megkeresi a before szót a str-ben és kicseréli az after szóra
//ha a before szó nagybetűvel kezdődik, akkor az after szó is nagybetűvel kell kezdődjön
//ha a before szó kisbetűvel kezdődik, akkor az after szó is kisbetűvel kell kezdődjön
//pl. myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped") -> "A quick brown fox leaped over the lazy dog"
function myReplace(str, before, after) {
  if(before[0] === before[0].toUpperCase()){
    after = after[0].toUpperCase() + after.slice(1);
  } else if(before[0] === before[0].toLowerCase()){
    after = after[0].toLowerCase() + after.slice(1);
  }
  str = str.replace(before,after)
  // console.log(str)
  return str;
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))

console.log("--------------------------------------------------");
//--------------------------------------------------------------------------------
//DNA párkeresés

const dnaPairs ={
  "A":"T",
  "T":"A",
  "G":"C",
  "C":"G"
}

function pairElement(str) {
  str = str.split("").map(parKereses);
  function parKereses (eredeti){
    return [eredeti,dnaPairs[eredeti]]
  }
  return str;
}

console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));

console.log("--------------------------------------------------");
//--------------------------------------------------------------------------------
//hiányzó betű az abc-ből
//megkeresi a hiányzó betűt a stringben az abc alapján
//pl. "abce" -> "d"

function fearNotLetter(str) {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let szelet = letters.slice(letters.indexOf(str[0]),letters.indexOf(str[str.length-1])+1);
  console.log(szelet);
  for(let i=0;i<szelet.length;i++){
    if(!str.includes(szelet[i])){
      return szelet[i];
    }
  }
  
}
console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));

console.log("--------------------------------------------------");
//--------------------------------------------------------------------------------
//az ismétlődő elemeket kiszedi a tömbből és egyesíti őket egy tömbbe

function uniteUnique(...arr) {
  let osszesitett = [].concat(...arr);
  osszesitett =Array.from(new Set(osszesitett));
  //muszáj az Array.from-ot használni, mert new Set-tel egy setet ad vissza (ami nem tömb), de az Array.from átalakítja tömbbé
  // Set(5) {1, 3, 2, 5, 4}-> set
  return osszesitett;//egyből vissza lehetne adni az arrayt,de mindegy
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));

console.log("--------------------------------------------------");
//--------------------------------------------------------------------------------
//html entitások kicserélése
//kicseréli az egyes karaktereket a megfelelő html entitásokra

const htmlKarakterek = {
  '"':'&quot;',
  '&':'&amp;',
  '<':'&lt;',
  '>':'&gt;',
  "'":"&apos;"
}

function convertHTML(str) {
  [...str].forEach((char) =>{ //a stringet tömbbé alakítjuk és végig iterálunk rajta
  if(Object.keys(htmlKarakterek).includes(char)){
     str = str.replace(char,htmlKarakterek[char]);
  }
  })
 return str;
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML('Stuff in "quotation marks"'))
console.log(convertHTML("<>"))

console.log("--------------------------------------------------");
//--------------------------------------------------------------------------------
//Sum All Odd Fibonacci Numbers
//összeadja a Fibonacci sorozatban az összes páratlan számot, amik a megadott számnál kisebbek vagy egyenlőek
// ha negatívat adunk meg, akkor undefindet ad vissza
function sumFibs(num) {
  let fibonacci = 0;
  let array =[0,1];
  if(num>=1){
    while(fibonacci<=num){
      fibonacci = array[array.length-1] + array[array.length-2];
      if(fibonacci<=num){
        array.push(fibonacci);
      }
    }
  array = array.filter((elem)=>elem%2==1);
  array = array.reduce((a,b)=>a+b);
  return array;
  }else if(num==0){
    array=0;
    return array;
  }
  // console.log(fibonacci);

}

console.log(sumFibs(10));

console.log(sumFibs(1000));
console.log(sumFibs(4));
console.log(sumFibs(0));
console.log(sumFibs(75025));
