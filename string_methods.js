let username = "  Valentine Wolf   ";
let phoneNumber = "123-456-7890";
console.log(username.length);
console.log(username.charAt(0));
console.log(username.indexOf("e")); //a változó első keresett string-nek az indexe
console.log(username.lastIndexOf("e")); //a változó utolsó keresett string-nek az indexe


username = username.trim();
username = username.toUpperCase();
username = username.toLowerCase();


phoneNumber = phoneNumber.replaceAll("-","/");   //kicserél minden keresett értéket a változóban valami máasra
console.log(phoneNumber);
console.log(username);
//---------------------------------------------------------------------------

let fullName = "Valentine Wolf";
let firstName;
let lastName;

// firstName = fullName.slice(0,9);  //index mettől (beleszámítódik) meddig(nem számítódik bele)
// lastName = fullName.slice(10);  //ahonnan kezdje a vágást (onnantól jelenítse meg)

//  lastName = fullName.slice(fullName.indexOf(" ") +1,fullName.length);
lastName = fullName.slice(fullName.indexOf(" ") + 1);

firstName = fullName.slice(0,fullName.indexOf(" "));
console.log(lastName);
console.log(firstName);


//---------------------------------------------------------------------------

//adatok/egységek formázására használjuk -> .toLocaleString(adott ország kódja,{style:,currency:})
let myNum = 123456.789;
let myPerc = .75;
let fok = 100;
// myNum = myNum.toLocaleString("hu-HU",{style:"currency",currency:"USD"});
myNum = myNum.toLocaleString("de-DE",{style:"currency",currency:"EUR"});

myPerc = myPerc.toLocaleString(undefined,{style:"percent"});

fok = fok.toLocaleString(undefined,{style:"unit",unit:"celsius"});
console.log(myNum);
console.log(myPerc);
console.log(fok);