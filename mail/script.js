//  1. chiedo all'utente la sua mail
const Mail = prompt("inserisci la tua mail");
console.log(Mail);

//  2. verifico se la sua mail e' presente sulla lista 
const list = ["gino@gmail.com", "luca@gmail.com", "fabio@gmail.com"]

//  3. stampiamo un esito della verifica
let access= true;
for ( let i=0; i<list.length; i++){
    if (list[i].includes(Mail)){
        console.log("accedi");
    } 
}

 console.log("mail non presente nella lista")