// Continuare a chiedere all'utente un numero tra 1 e 10 fino a quando l'utente non inserisce il valore corretto

   let numbersOneOfTen= parseInt(prompt("Prova ad inserire un numero che va da 1 a 10"));

   while (numbersOneOfTen< 1 || numbersOneOfTen> 10){
   numbersOneOfTen= parseInt(prompt("Prova ad inserire un numero che va da 1 a 10"));
   console.log(userNumber);
   }