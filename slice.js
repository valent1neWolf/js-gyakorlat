function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
    const newArray = anim.slice(beginSlice, endSlice)
    return newArray;
    // Only change code above this line
  }
  
  const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  console.log(sliceArray(inputAnim, 1, 3));

    //--------------------------------------------------------------------------------
    function nonMutatingSplice(cities) {

        return cities.slice(0,3);
      }
      
      console.log(nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"]));