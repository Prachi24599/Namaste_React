//what is await - await is a keyword that can only be used inside a async function

//Example
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve("P1 Promise is resolved!");
    }, 10000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve("P2 Promise is resolved!");
    }, 10000);
})

async function getData() {
    console.log("Hello");
    const res1 = await p1;
    console.log(res1);

    const res2 = await p2;
    console.log(res2);
    console.log("Bye");
}

getData();