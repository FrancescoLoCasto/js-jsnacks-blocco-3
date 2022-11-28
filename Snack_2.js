// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

let numsList = [];

let tot = 0;

while (tot < 50) {
   let promptNums = parseInt(prompt("Digita un numero inferiore di 50!"))
   tot += promptNums
   numsList.push(promptNums)
}