const strava = require('strava-v3');
const fs = require("fs.promised");

fs.readFile('json.txt', 'utf8').then(json => {
    console.log(json);
}).catch(error => {
    console.log(error);
});