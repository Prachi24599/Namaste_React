//what is await - await is a keyword that can only be used inside a async function

//Example
const p = new Promise((resolve, reject) => {
    resolve("Promise is resolved!");
})

async function getData(){
    const data = await p;
    console.log(data);
}

getData();