/*
Creo un ciclo for che iteri partendo da 1 fino a =< 100, e che inizialmente stampi il risultato in console.
*/

const divContainer = document.querySelector("div.dr-container");
console.log(divContainer);


for (let i = 1; i <= 100; i++) {

    const divElement = document.createElement('div'); // creo 'i' div

    if (i % 3 === 0 && !(i % 5 === 0)) { //verifico che sia modulo tre ma non 5
        console.log(i, 'Fizz')
        divElement.append("Fizz");
        divContainer.append(divElement);
        divElement.classList.add("fizz-div");
    }

    else if (i % 5 === 0 && !(i % 3 === 0)) { //verifico che sia modulo 5 ma non 3
        console.log(i, 'Buzz')
        divElement.append("Buzz");
        divContainer.append(divElement);
        divElement.classList.add("buzz-div");
    }

    else if (i % 3 === 0 && i % 5 === 0) { //verifico che sia modulo di entrambi
        console.log(i, 'FizzBuzz')
        divElement.append("FizzBuzz");
        divContainer.append(divElement);
        divElement.classList.add("fizz-buzz-div");
    }

    else if (!(i % 3 === 0 || i % 5 === 0)) { //verifico che non sia modulo di nessuno
        console.log(i);
        divElement.append(i);
        divContainer.append(divElement);
        divElement.classList.add("number-i-div");
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