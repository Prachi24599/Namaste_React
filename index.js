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

function attachEventListener(){
    var count = 0;
    document.getElementById("clickMe").addEventListener("click", function xyz(){
        console.log("Button Clicked!", count++)
    })
}
attachEventListener();
