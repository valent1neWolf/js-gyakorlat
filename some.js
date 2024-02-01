//pozitívat add vissza, ha van akár egy érték is a tömbben, ami megfelel a feltételnek, egyébként false-t
//az every-vel ellentétben, ahol akkor ad vissza true-t, ha minden elem megfelel a feltételnek
function checkPositive(arr) {
    // Only change code below this line
  const vanPozitiv = arr.some((szam)=>szam>0)
  return vanPozitiv;
    // Only change code above this line
  }
  
  const eredmeny = checkPositive([1, 2, 3, -4, 5]);
  console.log(eredmeny)