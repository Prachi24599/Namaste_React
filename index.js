//wwhat is async - async is a keyword that is used before the function to create a async function
//We can return promise from it, If we return a value, It will wrap it inside the promise and then return

const p = new Promise((resolve, reject) => {
    resolve("The Promise is resolved!");
})
async function getData() {
    // return "Namaste"
    return p
}

const dataPromise = getData();
console.log(dataPromise);
// [[Prototype]]
// : 
// Promise
// [[PromiseState]]
// : 
// "fulfilled"
// [[PromiseResult]]
// : 
// "Namaste"

//How to get the actual result from dataPromise i.e. return promise
//It is the same way we handled promises

dataPromise.then((res) => console.log(res));
//Namaste