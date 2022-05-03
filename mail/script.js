//  1. chiedo all'utente la sua mail
const mail = prompt("inserisci la tua mail");
console.log(mail);

//  2. verifico se la sua mail e' presente sulla lista 
const list = ["", "luca@gmail.com", "fabio@gmail.com"]

//  3. stampiamo un esito della verifica

let userRegistered = false

for ( let i=0; i<list.length; i++){
    if (list[i]==(mail)){
        userRegistered=true;
    } 
    
}
if (userRegistered == false){
    console.log("utente non presente")
    }
    else{
        console.log("utente presente")
    }

