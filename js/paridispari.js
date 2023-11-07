// function pariOrDispari(numero) {
//     let risultato;

//     if(numero % 2 == 0) {
//         risultato = "pari";
//     } else {
//         risultato = "dispari";
//     }

//     return risultato;
// }

// const numero = parseInt( prompt("Inserisci un numero da 1  a 5") );
// let risultato = pariOrDispari(numero);
// console.log("Il tuo numero è " + risultato);

// let casualNumber = getUnNumero();

// function getRndInteger(min, max) {
//       return Math.floor(Math.random() * (max - min + 1) ) + min;
// }

// function getUnNumero() {
//     const numero = getRndInteger(1, 5);
//     console.log(numero);
//     let numeri = "";
//     return numeri;
// }

// function somma(numero, numeri) {
//     return (numero+numeri);
// }

// console.log( somma(numero, numeri) )


////////////////////////////////////////////////////////////////////////////////////////////


//input: ricevo la scelta pari/dispari dall'utente
const puntata = prompt("Scegli tra pari e dispari");

//input: ricevo il numero scelto dall'utente
const numeroUtente = parseInt( prompt("Inserisci un numero da 1  a 5") );

//estraggo il numero casuale per il computer
const numeroComputer = getRndInteger(1,5);

//elaborazione: sommo i numeri
const somma = numeroUtente + numeroComputer;

//elaborazione: controllo che la somma sia pari
const risultatoPariOrDispari = pariOrDispari(somma);

console.log("Somma totale: ", somma);
console.log("Risultato: ", risultatoPariOrDispari);

//elaborazione: controllo che l'utente abbia vinto
//output: informo l'utente

if(puntata == risultatoPariOrDispari) {
    alert("Vince Utente");
} else {
    alert("Vince Computer");
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function pariOrDispari(numero) {
    let risultato = "dispari";

    if(numero % 2 == 0) {
        risultato = "pari";
    }

    return risultato;
}