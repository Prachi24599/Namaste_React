//Promise.any - It is success seeking api
//It will wait for any of promise to get success and it will return its result
//If all the promised failed then it will throw an AggregateError: All promises were rejected


const p1 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P1 resolve"), 3000);
    setTimeout(() => reject("P1 reject"), 1000);

})

const p2 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P2 resolve"), 5000);
    setTimeout(() => reject("P2 reject"), 1000);
})

const p3 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P2 resolve"), 2000);
    setTimeout(() => reject("P3 reject"), 2000);

})

Promise.any([p1, p2, p3]).then((res) => {
    console.log(res);
}).catch((err)=>{
    console.error(err);
})