{

//spread operation on typescript guard...

const friends : string[] = ['Masud', 'walid', 'Derar', 'Ubaid'];

const sahabi : string[] = ['Umar', 'Abu Bakar', 'Usman'];


friends.push(...sahabi);

//spread  opertion in object with typescript...

const sahabir = {
    name: 'Khalid',
    father: 'Walid',
    contribution: 'on force'
}

const normal = {
    perofession: 'farming'
}

const persons = {
    ...sahabir,
    ...normal
}



// rest operator


const greetings = (...name : string[]): string => {
    let greetMessage = 'hi ';
    name.forEach(element => {
        greetMessage += element + ' '
    });

    return greetMessage
}

console.log(greetings('khalid', 'walid', 'umair'));












}