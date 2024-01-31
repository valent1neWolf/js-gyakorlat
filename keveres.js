let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

shuffle(cards);

console.log(cards);
//console.log(cards[0]);
//cards.forEach(card => console.log(card));

function shuffle(array){    //mivel globális változó, ezért amúgy ki is hagyhatnánk ezt az elemet a ()-ből és minden array helyére írhatnánk az array nevét
    //ami előnye van, hogy bármilyen array-t behelyettesíthetnénk  a shuffle(cards) <-helyére és azt is összekeverné
  let currentIndex = array.length;

  while(currentIndex != 0){
    let randomIndex = Math.floor(Math.random() * array.length);
    currentIndex-=1;

    let temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  
  return array;
}