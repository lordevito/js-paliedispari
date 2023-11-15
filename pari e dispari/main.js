`use strict`;

//Chiediamo all'utente di scegliere tra paro o disparo.

let scelta = prompt('Pari o Dispari?');

//Determiniamo la condizione true/false per la scelta dell'utente.

let condizioneScelta = false;
if (scelta === "Pari") {
    condizioneScelta = true;
  }

// Stampo in console la scelta.

console.log('Hai scelto ' + scelta);

//Chiedo all'utente di scegliere un numero tra 1 e 5.

let numeroScelto = Number(prompt('Scegli un numero da 1 a 5'));

//Genero un numero random da 1 a 5 per il computer.

const min = 1;
const max = 5;
function ngeneratoComputer (number) {
    let numeroComputer = Math.floor(Math.random() * (max - min) + min);
    return numeroComputer;
  }

//Faccio la somma dei due numeri.

let sommaNumeri = numeroScelto + numeroComputer;

//Stampo la somma in console.

console.log('La somma dei numeri è ' + sommaNumeri);

//Stabiliamo se la somma dei due numeri è pari o dispari e dichiariamo chi ha vinto.

function decisioneVincitore (number2) {
  if (condizioneScelta === true && sommaNumeri%2 == 0) {
    console.log('Hai vinto!');
  } else if (condizioneScelta == false && sommaNumeri%2 != 0) {
    console.log('Hai vinto!');
  } else {
    console.log('Hai perso!');
  }
}