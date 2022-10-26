// // Esercizio 1

// let arrayNumeri = [];

// let somma = 0;

// while(somma < 50){
//     let num = parseInt(prompt("inserisci numero"));
//     somma += num;
// }

// console.log(somma);


// Esercizio 2

let ciclo = 0;
let sommaProvvisoria = 0;


do{
    let num = parseInt(prompt("inserisci numero"))

    sommaProvvisoria += num;

    console.log("Somma Provvisoria: ", sommaProvvisoria);

    ciclo++

} while (ciclo < 5)

console.log("Somma Finale: ", sommaProvvisoria);