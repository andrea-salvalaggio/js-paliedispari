// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.


// Creo una costante per chiedere all'utente di inserire una parola
const userWord = prompt('Inserisci una parola');
let firstString = 'ciao';

function reverse(firstString) {

    let result = '';

    for (let i = firstString.length - 1; i >= 0; i--) {
        result += firstString[i];
    }

    return result;

}

console.log(reverse(userWord));
console.log(reverse(firstString));