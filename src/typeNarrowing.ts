
// We are adding execcsive checks on the types
function getChai(kind : string | number) : string{
    if(typeof kind === "string"){
        return `Making ${kind} chat...`; // we know if we are inside this if then kind is going to be string type
    }
    return `chai order : ${kind}`; //If we are here means type of kind is number
}


function serveChai(msg?: string) : string { // ? means it is optional
    if(msg){
        return `Serving ${msg}`;
    }
    return `Serving default masala chai`;
}

class kulhadChai{
    serve(){
        return `Serving Kulhad Chai.`;
    }
}

class Cutting{
    serve(){
        return `Serving Cutting Chai`;
    }
}

function serve(chai : kulhadChai | Cutting){
    if(chai instanceof kulhadChai){
        return chai.serve(); // As we have added the if condition, we know the chat is going to be method of kulhadChai class
    }
}

type ChaiOrder = {
    type : string
    suger : number
}

function isChaiOrder(obj : any) : obj is ChaiOrder{
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.suger === "number"
    )
}

function serveOrder(item : ChaiOrder | string ){
    if(isChaiOrder(item)){
        return `Serving ${item.type} chat with ${item.suger} suger`;
    }
    return `serving custom chai ${item}`;
}

const myObj  = {
    type : "masala tea",
    suger : 2
}
console.log(serveOrder("prachi"));
console.log(serveOrder(myObj));

type MasalaTea = {
    type : "masala";
    spicelevel : number
}

type GingerTea = {
    type : "ginder";
    spicelevel : number
}

type ElaichiTea = {
    type : "elaichi";
    spicelevel : number
}

type Chai = MasalaTea | GingerTea | ElaichiTea;

function MakeChai(order : Chai){
    switch (order.type) {
        case "masala":
            console.log("masala tea")
            break;
        case "ginder":
            console.log("ginger tea");
            break;
        case "elaichi":
            console.log("elaichi tea");
            break;
        default:
            break;
    }
}

MakeChai({ type: "elaichi", spicelevel: 2 });