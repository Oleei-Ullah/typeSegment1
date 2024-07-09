"use strict";
{
    const add = (num1, num2) => `${num1 + num2}`;
    function normalAdd(num1, num2) {
        return num1 * num2;
    }
    //Methods of a object with typescript here.....
    const person = {
        name: "khalid",
        balance: 5900,
        //normal anonymous function as 'this' keyword doesn't work on arrow function..
        addBalance(balance) {
            return `${this.balance * balance}`;
        }
    };
    console.log(person.addBalance(5));
}
