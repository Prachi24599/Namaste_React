// function Counter(){
//     var counter = 0;
//     return function incrementCounter(){
//         counter++;
//         console.log(counter);
//     }
// }

// var counter1 = Counter();
// counter1();
// counter1();
// counter1();

// function x(){
//     var a = 7;
//     return function y(){
//         console.log(a);
//     }
// }
// var z = x();
// //=====
// z();

function pranit(){
    for(var i =1; i <=5; i++){
        function print(i){
            setTimeout(function(){
                console.log(i)
            }, i * 1000)
        }
        print(i);
    }
    console.log("Dudu")
}
pranit()