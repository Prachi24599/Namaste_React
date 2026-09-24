function makeChai(type : string, cups : number){ //It should have 2 paraments
    console.log(`Making ${cups} cups of ${type}`);
}

makeChai("Masaala", 2);

function getChaiPrice() : number { //It should always return a number
    return 25;
}

function makeOrder(order : string){
    if(!order) return null;
    else return order
}

//void means our function wont return anything
function logChai () : void{
    console.log(`Making Tee`);
}


//optional parameter
//We add question make to it optional or we provide the default value
//optinal parameters are always placed at the end
function orderMyTea(type?: string){


}
function orderMyCoffee(type : string = "masala"){

}


function TeaLove (order : {
    type : string;
    suger: number;
    size : "small" | "large"
}): number{
    return 50000;
}

const res = TeaLove({type : "masala", suger : 2, size : "small"})
console.log(res)