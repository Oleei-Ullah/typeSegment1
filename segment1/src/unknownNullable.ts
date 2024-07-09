{


    const getSpeedOfCarInPerHour = ( arg : unknown ) => {
        let result: unknown;
        if(typeof arg === 'number') {
            result = arg / 3600;
            console.log(result);
        } else if(typeof arg === 'string') {
            const numberValue = arg.split(' ');
            const [value, unit] = numberValue;
            result = +value / 3600
        }
    }

    getSpeedOfCarInPerHour(4434)
}