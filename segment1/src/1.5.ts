const person : {
    firstName: string,
    middleName?: string,
    lastName: string
} = {
    firstName : 'Abdullah',
    lastName: "Amir Hamza"
};



const getFeature : {
    feature : 'Video Calling',  //literal type --> when peroperties value act like the type its callded the literal type.
    developingDuration: number,
    isFinished: boolean
} = {
    feature: 'Video Calling',
    developingDuration: 3,
    isFinished: true
}



const getFeature2 : {
    readonly feature : string,  //Access modifier helps to dev to make decision on the peroperties accession.
    developingDuration: number,
    isFinished: boolean
} = {
    feature: 'Video Calling',
    developingDuration: 3,
    isFinished: true
}
// here user can't change the value because featuer properties have the readonly access modifier.
