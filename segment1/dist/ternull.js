"use strict";
var _a, _b;
{
    //ternary operator
    const age = 15;
    const isAdult = age >= 18 ? 'Adult' : 'Not Adult';
    //nullish coalescing operator
    const isAuthenticated = null;
    const usertype = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : 'guest';
    console.log(usertype);
    //optional chaining with nullish coalescing operator...
    const userData = {
        name: 'Abdullah',
        lastName: {
            father: 'Khalid',
        }
    };
    const optional = (_b = (_a = userData === null || userData === void 0 ? void 0 : userData.lastName) === null || _a === void 0 ? void 0 : _a.mother) !== null && _b !== void 0 ? _b : 'Kawla';
    console.log(optional);
}
