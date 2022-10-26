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

// Versione con controllo tentativi 
// Da aggiornare con limiter if e else per disabilitare il campo di input
// (plus) testare aggiunta timer per riprovare ad accedere e riabilitare input.

let nomi = ["Obi-Wan", "Luke", "Han", "Jar-Jar", "C3", "Jabba", "Padmè", "Qui-Gon", "Mace", "R2", "Darth", "Darth", "Sheeve"];

let attemptCounter = 5;

document.getElementById("tentativi").innerHTML = attemptCounter;

function checkTheName(){

    attemptCounter -= 1;

let i = 0;

let controlloreStopCiclo = i;

let nomeControllato = document.getElementById("inputName").value

let variabileControllo = false;

while(i < nomi.length){

    if(nomeControllato == nomi[i]){

        variabileControllo = true;
        controlloreStopCiclo = i

        i = nomi.length
    }
    else{
        i++
    }
}

if (variabileControllo == true){
    console.log("Nome presente nella " + controlloreStopCiclo +"° posizione di indice array, ciclo di ricerca terminato");
    console.log("Valore di i al quale si è interrotta la ricerca: ", controlloreStopCiclo);
    variabileControllo = false;
}
else{
    console.log("non presente");

}

console.log(variabileControllo)

console.log(attemptCounter);
document.getElementById("tentativi").innerHTML = attemptCounter;

}
    


// let i = 0;

// let controlloreCiclo = i;

// let nomeControllato = document.getElementById("inputName").value

// let variabileControllo = false;

// while(i < nomi.length){

//     if(nomeControllato == nomi[i]){

//         variabileControllo = true;
//         controlloreCiclo = i

//         i = nomi.length
//     }
//     else{
//         i++
//     }
// }

// if (variabileControllo == true){
//     console.log("Nome presente nella " + controlloreCiclo +"° posizione di indice array, ciclo di ricerca terminato");
//     console.log("Valore di i al quale si è interrotta la ricerca: ",controlloreCiclo);
//     variabileControllo = false;
// }
// else{
//     console.log("non presente");

// }

// console.log(i);
// console.log(variabileControllo)





