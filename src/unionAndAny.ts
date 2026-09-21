//Union = By using pipe sign we can specify multiple data types
//not just on default data types but on our custom data types as well
let sub : string | number = "1M";

let apiResponseStatus : "pending" | "success" | "error" =  "pending";

//Any - we dont specify any type, better not to use it
let res;

const orders = ["12", "20", "28", "42"];
let currentorder : string | undefined;

for(let order of orders){
    if(order === "28"){
        currentorder = order;
        break;
    }
    currentorder = "111";
}
console.log(currentorder);

