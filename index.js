const github_api = "https://api.github.com/users/prachi24599"

const res = fetch(github_api);
console.log(res);


//The Promise's .then() mechanism calls our callback function and passes a resolved vale
//which is in the PromiseResult field (of returned promise object)to the callback function
//That is how we are able to access data inside a callback function

res.then(function(data) { 
    console.log(data);
    const actualRes = JSON.stringify(data.body.data)
    console.log(actualRes)
})


createOrder(cart).
    then(function(orderId){
        return proceedtoPayment(orderId);
    })
    .then(function (paymentInfo){
        return showOrderSummary(paymentInfo)
    })
    .then(function (paymentInfo){
        return updateWalletbalance(paymentInfo);
    })