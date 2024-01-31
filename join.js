//összefűzi az array elemeit azzal az atribútummal, amit megadunk neki ()-ben:
function sentensify(str) {
    // Only change code below this line
  const newArray = str.split(/\W/).join(" ");
  return newArray;
    // Only change code above this line
  }
  
  console.log(sentensify("May-the-force-be-with-you"));
  console.log(sentensify("The.force.is.strong.with.this.one"));
console.log("--------------------------------------------------");
  //---------------------------------------------------------------------------------
  //url maker:
  // Only change code below this line
function urlSlug(title) {
    const url = title.trim().split(/\W+/).join("-").toLowerCase();
    return url;
    }
    // Only change code above this line
    console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
    console.log(urlSlug(" Winter Is  Coming"));


    //---------------------------------------------------------------------------------
    function checkPositive(arr) {
        // Only change code below this line
      let pozitive = arr.every((elem)=> elem>0)
      return pozitive;
        // Only change code above this line
      }
      
      console.log(checkPositive([1, 2, 3, -4, 5]));