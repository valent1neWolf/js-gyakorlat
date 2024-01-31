// let ownProps = [];

// for (let property in duck) {
//   if(duck.hasOwnProperty(property)) {
//     ownProps.push(property);
//   }
// }

// console.log(ownProps);

// Bird.prototype.numLegs = 2;	//mindegyiknek lesz ilyen property-je

//így az előző loop-nak a tovább gondolása

// let ownProps = [];
// let prototypeProps = [];

// for (let property in duck) {
//   if(duck.hasOwnProperty(property)) {
//     ownProps.push(property);
//   } else {
//     prototypeProps.push(property);
//   }
// }

// console.log(ownProps);
// console.log(prototypeProps);

//constructor property -> minden objectre lehet használni
//objectNeve(*subtype).constructor === ObjectTípusa(*supertype)	--->true/false

function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}

//példa rá:

function Dog(name) {
  this.name = name;
}
let kutyus = new Dog("Kolbi")
let eb = {
  name:"Pözsó"
}
// Only change code below this line
function joinDogFraternity(candidate) {
  if(candidate.constructor===Dog){
    return true;
  }else{
    return false;
  }
}

console.log(joinDogFraternity(kutyus))
console.log(joinDogFraternity(eb))

//instanceof -> ugyanaz mint a constructor, csak nem kell attól félni, hogy egy prototype-al felülírjuk
//objectNeve(*subtype) instanceof ObjectTípusa(*supertype)	--->true/false
//hogy ezt a constructor-os problémát elkerüljük a prototype object-ben, a constructor-t is beírjuk pl.constructor: Bird,

function Bird(name) {
    this.name = name;
  }
  
  let duck = new Bird("Donald");
  console.log(Bird.prototype.isPrototypeOf(duck));// true-t ad vissza, mert a prototype-ban van a constructor

  //prototype lényegében egy másik kifejezés a szülő objektumra, amit a gyerek örököl
  //valahogy így kéne elképzelni(supertype/subtype):
  //-Object
  //  |-Bird
    //    |-duck
    //    |-canary
    //    |-sparrow

//a protype-okat pedig:
//-Object.prototype
//  |-Bird.prototype
//    |-duck.prototype
//    |-canary.prototype
//    |-sparrow.prototype
//vagyis ha el akarjuk érni pl. a duck.prototype-ot, akkor a Bird.prototype-ot is el kell érnünk és az Object.prototype-ot is


function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let goose = Object.create(Animal.prototype); // biztonságo módszer
let beagle= new Animal(); // Kevésbé biztonságos módszer

goose.eat()
console.log("Leszármazottja? ",goose instanceof Animal);
console.log("Leszármazottja? ",goose.constructor===Animal);
//---------------------------------------------------------------


Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
  };
  
  function Dog() { }
  
//ez esetben az Animal prototype-ja alapján hozza létre a Dog prototype-ját(ezzel kössük össze a két objectet)
  Dog.prototype = Object.create(Animal.prototype);
  //ha azt szeretnénk elérni, hogy a Dog constructorja a Dog legyen ne pedig az Animal, akkor:
  Dog.prototype.constructor = Dog;
  let pyrenean = new Dog();
  beagle.eat()
  console.log("Animal Leszármazottja-e Dog.prototype? ",Dog.prototype instanceof Animal);//true, mert a Dog.prototype-ban van az Animal.prototype
  console.log("Animal Leszármazottja-e Dog.prototype? ",Dog.prototype.constructor===Animal);//true, ugyanazt az a constructor-juk /false, ha a Dog.prototype.constructor = Dog
  console.log("Animal Leszármazottja-e Dog? ",Dog instanceof Animal);//false, mert a Dog egy function
  console.log("Animal Leszármazottja-e Dog? ",Dog.constructor===Animal);//false, mert a Dog egy function
  console.log("Animal Leszármazottja? ",pyrenean instanceof Animal);//true
  console.log("Animal Leszármazottja? ",pyrenean.constructor===Animal);//true
  console.log("Kutya Leszármazottja? ",pyrenean instanceof Dog);//true
  console.log("Kutya Leszármazottja? ",pyrenean.constructor===Dog);//false , mert a constructorja az Animal(Animal.prototype)
                                                                    //Dog.prototype.constructor = Dog; -> ezzel megoldható

                                                        
//Mixin -> több object tulajdonságait összekeverni egy új objectbe
//pl. egy objectnek van egy tulajdonsága, amit több object is használhatna, de nem akarjuk, hogy az összes objectnek legyen ilyen tulajdonsága
let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  // definiáljuk magát a mixin-t:
  let glideMixin  = function(obj){
    obj.glide = function(){
      console.log("Now I can glide!!!");
    }
  }
  glideMixin(bird); //itt hozzuk létre a glide-ot a bird objectben
  glideMixin(boat);
  
  bird.glide();
  boat.glide();                                                                  


  //closure -> egy function, ami hozzáfér a külső function változóihoz, de nem írhatja felül őket (csak olvashatja)
  //csak azt lehet felülírni, ami this-el van létrehozva; functionon belüli változókat nem lehet felülírni
  function Bird() {
    let weight = 15;
  
    this.getWeight = () => {return weight;}
  
  }
  let ducky = new Bird();
  console.log(ducky.weight)
  console.log(ducky.getWeight())

//immediately invoked function expression (IIFE) -> egy function, ami azonnal lefut, amint létrehoztuk
// (function () {
//     console.log("Chirp, chirp!");
//   })();

// makeNest();

//ha ennyi nem volt elég és még jobban szeretnénk bonyolítani az életünket, akkor:
// function Bird(){ }
// let owl = new Bird();
// let funModule =(function(){
//   return {
//     isCuteMixin:function(obj) {
//   obj.isCute = function() {
//     return true;
//       };
//     },
//     singMixin:function(obj) {
//   obj.sing = function() {
//     console.log("Singing to an awesome tune");
//   };
// }
// }
// })();

// funModule.isCuteMixin(owl);
// funModule.singMixin(owl);

// console.log(owl.isCute());
// owl.sing()