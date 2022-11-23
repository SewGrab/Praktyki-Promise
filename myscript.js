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
        console.log(result.map(({title, body}) => ({title, body}))); 
    })
    .catch((error) => console.log(error));