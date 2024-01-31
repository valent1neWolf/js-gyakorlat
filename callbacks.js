// callback = a function passed as an argument
//                    to another function.
 
//    Ensures that a function is not going
//    to run before a task is completed.
//    Helps us develop asynchronous code.
//    (When one function has to wait for another function)
//    that helps us avoid errors and potential problems
//    Ex. Wait for a file to load

sum(2, 3, displayDOM); //sum függvényhívás itt történik meg


//1.lépés -> "sum" funkciót elkezdi végezni a 3 megadott értékkel a funkciót. Összeadja a 2 értéket
//majd meghívja a függvényt ami 3. értékként lett megadva (ez esetben displayDOM)
//valamint átadja neki a result értékét is. Erre a "result"ra a displayDOM-ban "output"-ként hivatkozunk
function sum(x, y, callBack){
  let result = x + y;
  callBack(result); //displayDOM függvényhívás itt történik meg
}

function displayConsole(output){
  console.log(output);
}

function displayDOM(output){
  document.getElementById("myLabel").innerHTML = output;
}
