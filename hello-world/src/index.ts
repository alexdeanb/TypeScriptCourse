//Excercise One
type User = {
    name: string,
    age: number,
    occupation?: string
}


let users = [
    {
        name: 'John Smith',
        age: 30,
        occupation: "Software engineer"
    },
    {
        name: 'Kate Muller',
        age: 28
    }
]

//Excercise Two
type Bird ={
    fly: () => void
}
type Fish = {
    swim: () => void
}

type Pet = Bird | Fish

//Excercise Three
type weekDay = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday"

//Excercise Four
//Simplify the following
let user = getUser();   
console.log(user && user.address ? user.address.street: undefined);
//Simplified
let user = getUser();
console.log(user?.address?.street)
//Simplify the Following
let x = foo !== null && foo !== undefined ? foo : bar();
//Simplified
let x = foo ?? bar();
