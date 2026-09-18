const cart = ["A", "B", "C"];

createOrder(cart).then((orderId) => {
        console.log(orderId);
        return;
    }).then((orderId)=>{
        return proceedToPayment(orderId);
    }).then((paymentinfo)=>{
        console.log(paymentinfo)
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
    return true;
}

function proceedToPayment(){
    return new Promise((resolve, reject)=>{
        resolve("The payment is successful!")
    })
}