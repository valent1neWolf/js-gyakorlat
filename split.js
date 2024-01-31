//tördelés ahol nincswnek betűk
let kivulalo = "Hello-World,thank44you";
function splitify(str) {
    // Only change code below this line
    const cleanOne =  str.split(/[\W\d]+/) 
  return cleanOne;
    // Only change code above this line
  }
  console.log(splitify(kivulalo));
  console.log(splitify("Hello World,I-am code"));
  console.log(splitify("This.is.a-sentence"));
  console.log(kivulalo);