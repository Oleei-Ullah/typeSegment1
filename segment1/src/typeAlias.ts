type TStuedent = {
    name: string;
    age: number;
    address: string;
    contactNo?: string;
}


const student : TStuedent = {
    name: 'Umar',
    age: 34,
    address: 'Madina'
}


const student1 = {
    name: 'Khalid',
    age: 20,
    address: 'chittagong',
    contactNo: '019834'
}


type TAdd = (num1: number, num2: number) => number
const add : TAdd = (num1, num2) => num1 * num2;
console.log(add(3, 3));