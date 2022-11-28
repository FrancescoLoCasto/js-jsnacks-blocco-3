// Prendere due array della stessa lunghezza e generarne un terzo, prendendo alternativamente gli elementi da uno e dall'altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]

let listNums = [1,2,3,4,5,6,7,8,9]

let letterList = ["a","b","c","d","e","f","g","h","i"]

let allList = []

   for (let i = 0; i < letterList.length; i++) { 
      allList.push(listNums[i], letterList[i])     
   }

   console.log(letterList)

   console.log(listNums)

   console.log(allList)