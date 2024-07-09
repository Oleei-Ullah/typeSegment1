{



    //Union types...

    type TUser = {
        name: string;
        age: number;
        gender: 'male' | 'female';   //string literal type as union types
        codingSkill: 'high' | 'medium'
    }

    const user: TUser = {
        name: 'Khalid',
        age: 20,
        gender: 'female',
        codingSkill: 'medium'
    }


    type Tamim = 'Dedicated' | 'Non-Dedicated';
    type Sakib = 'Chur' | 'Dandabaz';

    type Player = Tamim | Sakib; //union type used in type

    const aPlayer : Player = 'Chur'

}