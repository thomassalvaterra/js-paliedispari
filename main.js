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

//confronto la p0arola iniziale con quella invertita (Palindroma o no?)
if(parola == parolaInvertita){
    console.log ("Parola palindroma");
}else {
    console.log("Parola non palindroma");
}

