(function () {
    console.log("Chirp, chirp!");
  })();

// makeNest();

//ha ennyi nem volt elég és még jobban szeretnénk bonyolítani az életünket, akkor:
//a mixer funkciókat és a iife-t vegyítve egy saját magát hívó funkciót hozunk létre,ami egy objektumot ad vissza
//meg kell hívni így is, pl.: funModule.isCuteMixin(owl);
function Bird(){ }
let owl = new Bird();
let funModule =(function(){
  return {
    isCuteMixin:function(obj) {
  obj.isCute = function() {
    return true;
      };
    },
    singMixin:function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
}
}
})();

funModule.isCuteMixin(owl);
funModule.singMixin(owl);

console.log(owl.isCute());
owl.sing();