const data = [
    { firstname : "John", lastname: "Doe", age: 30 },
    { firstname : "Jane", lastname: "Smith", age: 25 },
    { firstname : "Bob", lastname: "Johnson", age: 30 },
    { firstname : "Alice", lastname: "Williams", age: 28 }
]
//get full names of all people in the data array
function getFullNames(data){
    return data.map((person) => person.firstname + " " + person.lastname)
}   
console.log(getFullNames(data));

// { 30 : 1, 25: 1, 28 : 1 }
const countByAge = data.reduce((acc, curr) => {
   if(acc[curr.age]){
    acc[curr.age] =  ++acc[curr.age]
   }else{
    acc[curr.age] = 1;
   }
   return acc;
}, {});

console.log(countByAge);