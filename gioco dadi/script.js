// generiamo un numero random da 1 a 6 per il giocatore 
let numberPlayer = Math.floor(Math.random() * 6) + 1;
console.log(numberPlayer);
// generiamo un numero random da 1 a 6 per computer
let numberPc = Math.floor(Math.random() * 6) + 1;
console.log(numberPc);
// stabilire chi fa il punteggio piu' alto

if ( numberPlayer > numberPc){
   console.log("hai vinto")
} 
else if(numberPlayer < numberPc){
    console.log("il bot ha vinto")
}
else {
    console.log("pareggio")
}
