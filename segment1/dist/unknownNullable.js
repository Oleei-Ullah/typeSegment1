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
    getSpeedOfCarInPerHour(435434);
}
