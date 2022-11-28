// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

const numsListOne = [4,2,45,5,700,345,7,59,734,35,43,36,54,77,6,3456,31,23]


const numsListTwo = [34,345,2889,765,6776,53,345,,123,65]

while (numsListOne.length !== numsListTwo.length) {

   let numsUser = parseInt(prompt("Inserisci il tuo numero!"))

   if (numsListOne.length > numsListTwo.length) {

      numsListTwo.push(numsUser)
    }
}
