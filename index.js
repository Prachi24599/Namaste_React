//What is callback function in javascript?

// setTimeout(function(){
//     console.log("Timer");
// }, 5000);   


// function x(y){
//     console.log("x called");
//     y();
// }

// x(function y(){
//     console.log("y called");
// })

// function attachEventListener(){
//     var count = 0;
//     document.getElementById("clickMe").addEventListener("click", function xyz(){
//         console.log("Button Clicked!", count++)
//     })
// }
// attachEventListener();

//We can not trust setTimeout that It will execute code after specified amount of time
console.log("start");
setTimeout(function cb(){
    console.log("Timer")
}, 5000);
console.log("End");


//This loop will run for 10 sec
//It will block main thread for 10 second
let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate + 10000){
    endDate = new Date().getTime();
}

console.log("While Expires");