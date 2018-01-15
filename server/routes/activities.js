var express = require('express');
var router = express.Router();

const strava = require('strava-v3');
const fs = require("fs.promised");

/* GET user's activities. */
router.get('/', function(req, res, next) {
    fs.readFile('json.txt', 'utf8').then(json => {
        res.setHeader('Content-Type', 'application/json');
        res.json(json);
    }).catch(error => {
        res.json(error);
    });
});

module.exports = router;
