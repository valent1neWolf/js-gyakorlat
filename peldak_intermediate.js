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
    //--------------------------------------------------------------------------------