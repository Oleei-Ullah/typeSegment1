"use strict";
{
    const getSpeedOfCarInPerHour = (arg) => {
        let result;
        if (typeof arg === 'number') {
            result = arg / 3600;
            console.log(result);
        }
        else if (typeof arg === 'string') {
            const numberValue = arg.split(' ');
            const [value, unit] = numberValue;
            result = +value / 3600;
        }
    };
    getSpeedOfCarInPerHour(4434);
    //never type
    const throwError = (msg) => {
        throw new Error(msg);
    };
    throwError('It is an error. it will never give a return. So its type name is never type');
}
