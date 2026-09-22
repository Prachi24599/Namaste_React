let resonse = "54";

let numericString : number = (resonse as String).length;
console.log(numericString);

type Book = {
    name : string;
}

let bookString = '{"name" : "Think like a Monk"}'
let bookVal = JSON.parse(bookString) as Book;
console.log(bookVal.name)


try {
    throw new Error("this is my test error")
} catch (error) {
    if(error instanceof Error){
        console.log("===", error.message);
    }else {
        console.log("error", error)
    }
}

//never - We never want to return anything from the function
//ex - we want to keep this loop running infinite time
function neverReturn() : never{
    while(true){

    }
}