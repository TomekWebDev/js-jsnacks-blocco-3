// // Esercizio 1

// let arrayNumeri = [];

// let somma = 0;

// while(somma < 50){
//     let num = parseInt(prompt("inserisci numero"));
//     arrayNumeri.push(num)
//     somma += num;
// }

// console.log(somma);
// console.log(arrayNumeri);


// // Esercizio 2

// let ciclo = 0;
// let sommaProvvisoria = 0;


// do{
//     let num = parseInt(prompt("inserisci numero"))

//     sommaProvvisoria += num;

//     console.log("Somma Provvisoria: ", sommaProvvisoria);

//     ciclo++

// } while (ciclo < 5)

// console.log("Somma Finale: ", sommaProvvisoria);


// // Esercizio 3

// let n = parseInt(prompt("Inserire numero di array da creare"))
// let i = 0;

// while(i < n){
    
//     var array = new Array();

//     let k = 0;

//     while(k < 10){
//         array.push(Math.floor(Math.random() * 100));

//         k++
//     }

//     console.log(array);

//     i++
// };



// Esercizio 4

let nomi = ["Obi-Wan", "Luke", "Han", "Jar-Jar", "C3", "Jabba", "Padmè", "Qui-Gon", "Mace", "R2", "Darth", "Darth", "Sheeve"];

let i = 0;

let nomeControllato = prompt("Inserisci nome richiedente:");

let variabileControllo = false;

while(i < nomi.length){

    if(nomeControllato == nomi[i]){

        variabileControllo = true;

        console.log("Nome presente nella " + i +"° posizione di indice array, ciclo di ricerca terminato");
        console.log("Valore di i al quale si è interrotta la ricerca: ",i);
        i = nomi.length
    }
    else{
        i++
    }

}

if (variabileControllo == true){
    variabileControllo = false;
}
else{
    console.log("non presente");

}

console.log(i);






