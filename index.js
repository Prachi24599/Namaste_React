//what is await - await is a keyword that can only be used inside a async function

//Example
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//             resolve("P1 Promise is resolved!");
//     }, 10000)
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//             resolve("P2 Promise is resolved!");
//     }, 10000);
// })

async function getData() {
    console.log("Hello");
    const res1 = await new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve("P1 Promise is resolved!");
    }, 10000)
});
    console.log(res1);

    const res2 = await new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve("P2 Promise is resolved!");
    }, 10000);
});
    console.log(res2);
    console.log("Bye");
}

getData();

//Now in this case, we have defined the promises inside the function
//In this scenario, the setTimeout timer will start ones the js engine hit that line
//so after first promise resolve, It waits again 10000 ms for second promise to finish

//Output
// Hello
// P1 Promise is resolved!  -- After 10000 ms
// P2 Promise is resolved!  -- Will wait 10000 ms more and then 
// Bye