// class = a blueprint for creating objects
//              define what properties and methods they have
//              use a constructor for unique properties

class Player{

    score = 0;

    pause(){
        console.log("You paused the game");
    }
    exit(){
        console.log("You exited the game");
    }
}

const player1 = new Player();
const player2 = new Player();
const player3 = new Player();
const player4 = new Player();

player1.score += 1;

console.log(player1.score);
console.log(player2.score);

player1.pause();
player2.exit();

//-------------------------------------------------------------------

// constructor = a special method of a class,
//                          accepts arguments and assigns properties

class Student{

    constructor(name, age, gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    study(){
        console.log(`${this.name} is studying`);
    }
}

const student1 = new Student("Spongebob", 30, 3.2);
const student2 = new Student("Patrick", 35, 1.5);
const student3 = new Student("Sandy", 27, 4.0);

console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study();

console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);
student2.study();

console.log(student3.name);
console.log(student3.age);
console.log(student3.gpa);
student3.study();

//---------------------------------------------------------
// static = belongs to the class, not the objects
//               properties: useful for caches, fixed-configuration
//               methods:    useful for utility functions

class Car{

    static numberOfCars = 0;    //nem minden object-nek külön numberOfCars-ja van, hanem ez az érték
    //a staticnak köszönhetően a class-hez tartozik

    constructor(model){
        this.model = model;
        Car.numberOfCars += 1;  //figyelnin kell arra, hogy a class-en keresztül hívjuk meg
    }
    static startRace(){ //ugyanúgy ahogy staikus változót úgy funkciót is létre lehet hozni
        console.log("3...2...1...GO!");
    }
}

const car1 = new Car("Mustang");
const car2 = new Car("Corvette");
const car3 = new Car("BMW");

console.log(Car.numberOfCars);
Car.startRace();