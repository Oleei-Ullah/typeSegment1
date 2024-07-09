{

    const add = (num1: number, num2: number) : string => `${num1 + num2}`

function normalAdd (num1: number, num2: number): number {
    return num1 * num2
}



//Methods of a object with typescript here.....


const person = {
    name: "khalid",
    balance: 5900,
    //normal anonymous function as 'this' keyword doesn't work on arrow function..
    addBalance (balance: number) : string {
        return `${this.balance * balance}`
    }
}


console.log(person.addBalance(5));


//callback function with typescript...


const arr : number[] = [2,4,5,6];

const newArray : number[] = arr.map((ele: number) : number =>  ele + ele);

console.log(newArray);




}
