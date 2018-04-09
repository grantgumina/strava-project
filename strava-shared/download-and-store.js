const strava = require('strava-v3');
const fs = require('fs');

var fn = function getLatLongForActivityId(id) {
    return strava.streams.activity({
        id: id,
        types: 'latlng',
        resolution: 'high'
    }).then(response => {
        return response;
    }).catch(error => {
        return error;
    });
};

strava.athlete.listActivities({}).then(activities => {
    return activities.map(a => a.id);
}).then(activityIds => {
    let actions = activityIds.map(fn);
    return Promise.all(actions);
}).then(response => {
    return response.map(r => {
        return r[0];
    });
}).then(ll => {
    fs.writeFile("data.json", JSON.stringify(ll), function(err) {
        if(err) {
            return console.log(err);
        }

        console.log('success');
    });
}).catch(error => {
    console.log('error');
    console.log(error);
});