/*
Zadanie 9. (1pkt)
Stwórz obiekt klasy Promise -> niech zakończy się powodzeniem (resolve) po 5 sekundach i zwróci string 'Udało się!'. 
Jako callback (wywołanie w konsoli) niech wypisze zwrócony string w konsoli.

Zadanie 10. (2pkt)
Napisz funkcję multiplyAsync(x,y), która zwraca obiekt klasy Promise, kończący się porażką, gdy któryś za argumentów jest niepoprawny (nie jest liczbą). W przeciwnym przypadku zwraca iloczyn dwóch liczb. Napisz callback (wywołanie w konsoli), który wypisuje wynik w konsoli.

Zadanie 11. dodatkowe (2pkt)
Wykonaj funkcję get dla następującego url: https://jsonplaceholder.typicode.com/posts
Jako pierwszy callback (wywołanie w konsoli) - sprawdź czy response jest poprawny (status równy 200). Jeśli tak, to zwróć response, w przeciwnym wypadku wypisz błąd w konsoli.
Jako następny callback (wywołanie w konsoli) - użyj destrukturyzacji obiektów, aby wypisać w konsoli zmienną 'title' i 'body' każdego z postów.
 */

//zad9
const timerPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Udało się!");
    }, 5000);
})
.then((message) => console.log(message));

//zad10
const multiplyAsync = (x, y) => {
    return new Promise((resolve, reject) => {
        if (typeof(x) === "number" && typeof(y) === "number") {
            resolve(x*y);
        } else {
            reject("Given values aren't numbers: "+x+", "+y);
        }
    });
};

multiplyAsync(9, 4).then((result) => console.log(result));

//zad11
fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        if (response.status == 200) {
            return  response.json()
        } else {
            throw new Error("Response was not ok");
        }
    })
    .then((result) => {
        console.log(result);
        console.log(result.map(({title, body}) => ({title, body}))); 
    });