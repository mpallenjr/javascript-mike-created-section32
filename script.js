'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense= true;
if (hasDriversLicense) console.log('I can drive :D');
//when strict mode is activates it throws this error (script.js:6 Uncaught ReferenceError: hasDriverLicense is not defined)
//deactivated it thows no errors
