function pariOrDispari(numero) {
    let risultato;

    if(numero % 2 == 0) {
        risultato = "pari";
    } else {
        risultato = "dispari";
    }

    return risultato;
}

const numero = parseInt( prompt("Inserisci un numero da 1  a 5") );
let risultato = pariOrDispari(numero);
console.log("Il tuo numero è " + risultato);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let numeri;

function getUnNumero() {
    const numero = getRndInteger(1, 5);
    numeri.push( numero );
    return numeri;
}

let ilMioNumero = getUnNumero();
console.log("Numero generato: ", ilMioNumero );