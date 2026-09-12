const cart = ["A", "B", "C"];

const promise = createOrder(cart);
console.log(promise);
promise.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log("I have found an error", err)
})

//creating our own promise
function createOrder(cart){
    const pr = new Promise((resolve, reject) => {
        if(!validateCart(cart)){
            const err = new Error("Cart is empty");
            reject(err);
        }
        const orderId = "12345";
        if(orderId){
            resolve(orderId)
        }
    })
    return pr;
}

function validateCart(cart){
    return false;
}