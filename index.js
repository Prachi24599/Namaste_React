//Promise.all - It is safest option amongst all
//It returns result when all the promises are setteled

const p1 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P1 resolve"), 3000);
    setTimeout(() => reject("P1 reject"), 1000);

})

const p2 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P2 resolve"), 1000);
    setTimeout(() => reject("P2 reject"), 1000);
})

const p3 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P2 resolve"), 2000);
    setTimeout(() => reject("P3 reject"), 1000);

})

Promise.allSettled([p1, p2, p3]).then((res) => {
    console.log(res);
}).catch((err)=>{
    console.error(err);
})