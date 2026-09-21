
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