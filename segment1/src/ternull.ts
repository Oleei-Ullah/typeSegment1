{


    //ternary operator
    const age: number = 15
    const isAdult = age >= 18 ? 'Adult': 'Not Adult';

    //nullish coalescing operator

    const isAuthenticated = null;

    const usertype = isAuthenticated ?? 'guest';

    console.log(usertype);

    //optional chaining with nullish coalescing operator...


    const userData : {
        name: string;
        lastName: {
            father?: string;
            mother?: string;
        };
    }= {
        name: 'Abdullah',
        lastName: {
            father: 'Khalid',
        }
    }

    const optional = userData?.lastName?.mother ?? 'Kawla'

    console.log(optional);




}