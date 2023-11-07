//faccio dire al mio utente una parola
const parola = prompt("Inserisci una parola");
console.log(parola);

let stringa = parola;

//suddivido in più parti la parola
const parolaDivisa = stringa.split ("");
console.log(parolaDivisa);

//capovolgo la parola, ma è ancora suddivisa
const parolaCapovolta = parolaDivisa.reverse();
console.log(parolaCapovolta);

//unisco  le lettere della parola invertita
const parolaInvertita = parolaCapovolta.join("");
console.log(parolaInvertita);

//confronto la parola iniziale con quella invertita (Palindroma o no?)
if(parola == parolaInvertita){
    console.log ("Parola palindroma");
}else {
    console.log("Parola non palindroma");
}



//ALTRO MODO PER INVERTIRE UNA STRINGA CON IL CICLO FOR

// let parolaInvertita = "";

// for (let i = parola.length-1; i >= 0; i--) {
//     console.log( parola [i] );
//     parolaInvertita += parola[i]; 
// }




//ALTRO MODO PER INVERTIRE UNA STRINGA CON UNA FUNZIONE

// let parolaInvertita = giraParola(parola);

// function giraParola(parola) {
//     let parolaInvertita = "";

//     for (let i = parola.length-1; i >= 0; i--) {
//         console.log( parola [i] );
//         parolaInvertita += parola[i]; 
//     }

//     return parolaInvertita;
// }