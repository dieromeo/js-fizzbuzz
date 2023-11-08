/*
Creo un ciclo for che iteri partendo da 1 fino a =< 100, e che inizialmente stampi il risultato in console.
*/

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && !(i % 5 === 0)) {
        console.log(i, 'Fizz')
    }

    else if (i % 5 === 0 && !(i % 3 === 0)) {
        console.log(i, 'Buzz')
    }

    else if (i % 3 === 0 && i % 5 === 0) {
        console.log(i, 'FizzBuzz')
    }

    else if (!(i % 3 === 0 || i % 5 === 0)) {
        console.log(i);
    }


}

/*
All'interno del ciclo, tramite l'utilizo di if, verifico:
- se il numero generato in quel momento è modulo 3  --> visuallizzo al posto del numero "Fizz".
- se è modulo 5 --> visuallizzo al posto del numero "Buzz".
- se è modulo di entrambi --> visuallizzo al posto del numero "FizzBuzz".

### Bonus 1 :

Creo un container all'interno dell'html. Tramite la funzione `append()` aggiungo il valore della variabile iterata all'interno di un div.

### Bonus 2 :

Vado, a seconda del caso in cui mi trovo (modulo 3, 5 entrambi o nessuno), ad agiungere una classe differente al div creato nel bonus 1, in modo da stilizzarlo nel CSS.
*/