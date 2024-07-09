{




const khalifa = {
    id: 1,
    name: {
        firstName: 'Khalid',
        middleName: 'Bin',
        lastName: 'Walid'
    },
    occupation: 'Fighter'
}


const {name : {middleName : midName}} = khalifa;
console.log(midName);

//array destructure....

const sahabaKeram = ['Ali', 'Umar', 'Bakar', 'Usman'];
const [, ...rest] = sahabaKeram;


console.log(rest);

}