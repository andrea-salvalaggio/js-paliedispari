// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.


// Creo una costante per chiedere all'utente di inserire una parola
const userWord = prompt('Inserisci una parola');

// Creo una funzione per la parola contraria
function reverse(firstString) {

    // Creo una variabile per la parola contraria
    let result = '';

    // Creo un ciclo per verificare la parola contraria
    for (let i = firstString.length - 1; i >= 0; i--) {
        result += firstString[i];

        // Se la parola contraria è uguale alla parola originaria, allora la parola è palindroma
    } if (result === firstString) {
        console.log(`${firstString} è palindroma`);

        // Altrimenti la parola non è palindroma
    } else {
        console.log(`${firstString} non è palindroma`);
    }

    // Restituisco la parola contraria
    return result;

}

console.log(reverse(userWord));