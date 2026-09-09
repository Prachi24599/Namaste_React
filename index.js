//What is callback function in javascript?

setTimeout(function(){
    console.log("Timer");
}, 5000);   


function x(y){
    console.log("x called");
    y();
}

x(function y(){
    console.log("y called");
})