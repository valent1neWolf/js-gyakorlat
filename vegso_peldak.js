function palindrome(str) {
    // str = str.split
    str = str.replace(/[\W_]+/g,"").toLowerCase();
    let reverse = str.split("").reverse().join("");
    console.log(str)
    console.log(reverse)
    // if(reverse == str){
    //   return true;
    // }else{
    //   return false;
    // }
    return (reverse == str) ? true : false;
  }
  
  console.log(palindrome("eye"));
  console.log(palindrome("race car"));
  console.log(palindrome("My age is 0, 0 si ega ym."));
  console.log(palindrome("0_0 (: /-\ :) 0-0"))
  console.log(palindrome("not a palindrome"));
  console.log(palindrome("five|\_/|four"));

  
console.log("-------------------------------------------------");
//---------------------------------------------------------------------
//romai számokra alakítás

const roman = {
    M:1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1
  }
  function convertToRoman(num) {
    let szam="";
  for (const [key, value] of Object.entries(roman)) {
    while(num-value>=0){
      szam+=key;
      num-=value;
    }  
    // console.log(`${key}: ${value}`);
  }
   return szam;
  }
  
  console.log(convertToRoman(36));
  console.log(convertToRoman(2014));
  console.log(convertToRoman(3999));

  console.log("-------------------------------------------------");
//---------------------------------------------------------------------
//Caesars Cipher


function rot13(str) {
    let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    abc = abc.split("");
    str = str.split("");
    str = str.map(csere).join("");
    function csere(betu){
    let index = abc.findIndex((elem) => elem === betu); //megkeressük,hogy az adott betű hol van az abc-ben
    let newIndex = index+13 //ennek az értékét megtoldjuk 13-al (ami a caesar cipher lényege)
    if(newIndex>25){    //ha netán ez az index nagyobb lenne mint 25 (26 betű, de az index 25-ig megy), akkor visszatérünk az elejére
      newIndex = Math.abs(newIndex-26)
    }
    if (index==-1){ //ha nem található az adott karakter az abc-ben, akkor visszatérünk azzal a karakterrel
      return betu;
    } 
    betu = abc[newIndex]
    return betu
    }
    // console.log(abc)
    // console.log(str)
    return str;
  }
  
  console.log(rot13("SERR PBQR PNZC"));
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))
  console.log(rot13("SERR CVMMN!"));

console.log("-------------------------------------------------");
//---------------------------------------------------------------------
//amerikai telefon szám validálás

function telephoneCheck(str) {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    //ha van 1-es akkor az elejére kerül,amit szóköz követhet vagy nem, --> (1\s?)?
    //utána 3 szám, amit vagy zárójelbe teszünk vagy nem; --> (\(\d{3}\)|\d{3})
    //utána szóköz,kötőjel vagy semmi;--> [\s\-]?
    //utána 3 szám, --> \d{3}
    //utána szóköz vagy kötőjel vagy semmi, --> [\s\-]?
    //végül 4 szám,amivel zárul a telefonszám --> \d{4}
    return regex.test(str);
  }
  
console.log(telephoneCheck("555-555-5555")); //true
console.log(telephoneCheck("1 456 789 4444"));//true
console.log(telephoneCheck("55555555")) //false -->túl rövid
console.log(telephoneCheck("(555)5(55?)-5555"))//false -->nem megengedett karakterek

console.log("-------------------------------------------------");
//---------------------------------------------------------------------

let ertek ={
    "PENNY":0.01,
    "NICKEL":0.05,
    "DIME":0.1,
    "QUARTER":0.25,
    "ONE":1,
    "FIVE":5,
    "TEN":10,
    "TWENTY":20,
    "ONE HUNDRED":100,
  }
  function checkCashRegister(price, cash, cid) {
    let change = {
      "status": "CLOSED",
      "change": []
    };
    let kulonbseg = cash - price;
    let totalInDrawer = cid.reduce((total, curr) => total + curr[1], 0).toFixed(2);//a kasszában lévő összeg
  
    if (Number(totalInDrawer) < kulonbseg) {        //3-ból 2 lehetséges kimenet itt le van tudva még az elején
      change["status"] = "INSUFFICIENT_FUNDS";  //ha kevesebb pénz van a kasszában mint amennyi kell, akkor nem tudjuk visszaadni a különbséget
      return change;
    } else if (Number(totalInDrawer) === kulonbseg) {   //ha pont annyi van a kasszában mint amennyi kell, akkor úgy ahogy van visszaadjuk magát a kasszát (ez itt egy kicsit furán hangzik...xd)
      change["change"] = cid;
      return change;
    }
  
    for (let i = cid.length - 1; i >= 0; i--) {
      let currentCurrency = cid[i][0];
      let currentAmount = cid[i][1];
      let currentValue = ertek[currentCurrency];
      let koltve = 0;
  
      while (currentAmount > 0 && kulonbseg > 0 && currentValue <= kulonbseg) {
        kulonbseg -= currentValue;
        kulonbseg = kulonbseg.toFixed(2);
        currentAmount -= currentValue;
        koltve += currentValue;
      }
  
      if (koltve > 0) {
        change["change"].push([currentCurrency, koltve]);
      }
    }
  
    if (kulonbseg > 0) {
      change["change"] = [];
      change["status"] = "INSUFFICIENT_FUNDS";
    } else {
      change["status"] = "OPEN";
    }
  
    return change;
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))