// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// Creo una costante chiedendo all'utente di scegliere un numero da 1 a 5
const userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));
console.log(userNumber);

// Creo una condizione che mi dice se l'utente ha scelto un numero maggiore di 5 o minore di 1
if (userNumber > 5 || userNumber < 1) {
    alert('Hai scelto un numero non valido');
}

// Creo una funzione che genera un numero random da 1 a 5
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomNumber(1, 5));