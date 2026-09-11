const data = [
    { firstname : "John", lastname: "Doe", age: 30 },
    { firstname : "Jane", lastname: "Smith", age: 25 },
    { firstname : "Bob", lastname: "Johnson", age: 30 },
    { firstname : "Alice", lastname: "Williams", age: 28 }
]

//Find the first name of all the people whose age is less than 30
const ageLessThanThirty = data.filter(person => person.age < 30).map(person => person.firstname)

console.log(ageLessThanThirty)

const ageLessThanThirtyReduce = data.reduce((acc, curr) => {
    if(curr.age < 30){
        acc.push(curr.firstname);
    }
    return acc;
}, []) 
console.log(ageLessThanThirtyReduce)