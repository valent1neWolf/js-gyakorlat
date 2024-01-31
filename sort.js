//az elemek sorrendbe rendezésére használjuk
//megváltoztatja az eredeti array-t
//ha nem írunk bele mindent, akkor a tömb elemeit string-ként kezeli(ascii) és az alapján rendezi:
function alphabeticalOrder(arr) {
    // Only change code below this line
  
    return arr.sort();
    // Only change code above this line
  }
  
  console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
  console.log(alphabeticalOrder(["x", "h", "a", "m", "n", "m"]));
  console.log(alphabeticalOrder(["a", "a", "a", "a", "x", "t"]));

  //fordított sorrendbe rendezés:
//   If compareFunction(a,b) returns a value less than 0 for two elements a and b, then a will come before b. 
//   If compareFunction(a,b) returns a value greater than 0 for two elements a and b, then b will come before a.
//   If compareFunction(a,b) returns a value equal to 0 for two elements a and b, then a and b will remain unchanged.
  function reverseAlpha(arr) {
    return arr.sort(function(a, b) {
      return a === b ? 0 : a < b ? 1 : -1;
    });
  }
  
 console.log( reverseAlpha(['l', 'h', 'z', 'b', 's'])); // returns ['z', 's', 'l', 'h', 'b']

console.log("--------------------------------------------------")
  //számok sorrendbe rendezése:
  function ascendingOrder(arr) {
    return arr.sort(function(a, b) {
      return a - b;
    });
  }
  
  console.log(ascendingOrder([1, 5, 2, 3, 4])); // returns [1, 2, 3, 4, 5]


  //objektumok rendezése, úgy, hogy nem változtatunk az eredetin:

  const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  let newArray = [...arr]
  newArray.sort(compareNumbers)

  function compareNumbers(a, b) {
  return a - b;
}
return newArray;
  // Only change code above this line
}

console.log(nonMutatingSort(globalArray));
console.log(globalArray);