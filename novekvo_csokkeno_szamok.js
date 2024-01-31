let szam = 0;
document.getElementById("csokken").onclick = function minuszEgy() {
    szam-=1;
    console.log(szam, typeof szam);
    document.getElementById("countLabel").innerHTML = szam;
}
document.getElementById("no").onclick = function minuszEgy() {
    szam+=1;
    console.log(szam, typeof szam);
    document.getElementById("countLabel").innerHTML = szam;
}
document.getElementById("visszaalit").onclick = function minuszEgy() {
    szam=0;
    console.log(szam, typeof szam);
    document.getElementById("countLabel").innerHTML = szam;
}
visszaalit