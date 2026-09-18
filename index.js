//what is await - await is a keyword that can only be used inside a async function

//Example
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve("Promise is resolved!");
    }, 10000)
})

//If we use await keyword, Then JS Enginer waits on the same line until the promise is settled
// async function getData(){
//     console.log("Before calling!")
//     const data = await p;
//     console.log(data);
//     console.log("After result")
// }

// getData();


//In case of promise.then, It wont wait on the same line
//It will register the promise and continue its execution
//It will first print namaste js and then after 10 second, the result of promise
function getResult(){
    p.then((res) => {console.log(res)});
    console.log("namaste js")
}   
getResult();