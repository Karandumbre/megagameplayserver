const express = require('express');
const router = express.Router();
const timelineJson = require('./timelineSchema');
var mongoose = require('mongoose');

//GET HTTP method to /bucketlist
router.get('/', (req, res) => {
    timelineJson.find().exec(function (err, data) {
        if (err) throw err;
        res.send(data);
    });
});

module.exports = router;