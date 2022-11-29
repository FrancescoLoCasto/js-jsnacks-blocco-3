/**
 * Crea una funzione che accetti due argomenti, e che restituisca un valore numerico randomico tra i due argomenti inclusi.
 */

 function randomNumberLimit (limitMin, limitMax) {
   const casualNumbers = Math.floor(Math.random() * (limitMax - limitMin) + limitMin)

   return casualNumbers;
}

console.log(randomNumberLimit(1, 20))