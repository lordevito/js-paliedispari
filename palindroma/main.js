`use strict`;

//Chiedere all'utente di inserire una parola.

let parolaInserita = prompt("Inserisci una parola");

//Creo un array formato dalle lettere della parola inserita.

let parolainseritaArray = parolaInserita.split('');

//Creo un altro array con il method reverse.

let parolacontrarioArray = parolainseritaArray.reverse();

//Creo una stringa con le lettere dell'array reverse.

let contrarioArray = parolacontrarioArray.join('');

//Creo una funzione per il controllo della parola se plaindroma o no.

if (parolaInserita === contrarioArray) {
    function controlloParola (parolaPal) {
    console.log("La parola " + parolaInserita + " è palindroma");
    const parolaPalindroma = console.log("La parola " + parolaInserita + " è palindroma");
    return parolaPalindroma;
  }
  console.log("La parola " + parolaInserita + " è palindroma");
  }
  
  else {
    function controlloParola2 (parolanonPal) {  
    const parolanonPalindroma = console.log("La parola " + parolaInserita + " è palindroma");
    return parolanonPalindroma;
  }
  console.log("La parola " + parolaInserita + " non è palindroma");
}