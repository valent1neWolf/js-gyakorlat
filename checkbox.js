    // && AND
    // || OR
    // ! NOT pl.if(!(temp > 0))
    // !true -> false        !false ->true


    let sunny = true;
    if(!sunny){
        console.log("It's cloudy outside");
    }else{
        console.log("It's sunny outside");
    }


document.getElementById("myButton").onclick = function () {

    const visaBtn = document.getElementById("visa");
    const masterBtn = document.getElementById("master");
    const paypalBtn = document.getElementById("paypal");




    if (document.getElementById("subscribe").checked == true) {
        document.getElementById("subscribeLabel").style.backgroundColor = "green";
    }else{
        document.getElementById("subscribeLabel").style.backgroundColor = "red";
    }

    if (visaBtn.checked) {
        console.log("You are paying with Visa");
    } else if(masterBtn.checked){
        console.log("You are paying with Master Card");
    } else if(paypalBtn.checked){
        console.log("You are paying with Paypal");
    }
}