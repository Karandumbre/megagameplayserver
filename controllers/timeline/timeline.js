const express = require('express');
const router = express.Router();
const timelineJson = require('./timelineSchema');
const ObjectId = require('mongoose').Types.ObjectId;

//GET HTTP method to /bucketlist
router.get('/timelinedata', (req, res) => {
    timelineJson.TimelineSchemaJson.find().exec(function (err, data) {
        if (err) throw err;
        res.send(data);
    });
});


router.post('/addUpdateEventData', (req, res) => {
    data = {
        title: req.body.title,
        date: req.body.date,
        game: req.body.game
    }
    timelineJson.EventDatesJson.findOneAndUpdate({
        _id: new ObjectId(req.body.id)
    }, data, {
        upsert: true
    }, (err, response) => {
        if (err) {
            res.send(err)
        }
        res.send(response)
    })
})

router.get('/getEventData', (req, res) => {
    timelineJson.EventDatesJson.find({
        date: {
            $gte: new Date()
        }
    }).exec(function (err, data) {
        if (err) {
            res.send(err);
        };
        res.send(data);
    })
})


module.exports = router;