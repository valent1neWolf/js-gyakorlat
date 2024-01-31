// let username = "";

// while (username == "" || username== null) {      //először gondolkodunk aztán cselekszünk 
//     username = window.prompt("Enter your name");
// }

// alert("Hello", username);


let username;

do {
    username = window.prompt("Enter your name");
} while (username == "" || username== null);        //először cselekszünk aztán gondolkodunk

console.log("Hello", username);