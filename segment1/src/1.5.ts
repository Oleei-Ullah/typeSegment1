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

console.log(getFeature.feature);