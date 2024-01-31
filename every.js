function checkPositive(arr) {
    // Only change code below this line
  let pozitive = arr.every((elem)=> elem>0)
  return pozitive;
    // Only change code above this line
  }
  
  console.log(checkPositive([1, 2, 3, -4, 5]));