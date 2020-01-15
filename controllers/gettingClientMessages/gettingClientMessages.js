//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const ClientMessagesJson = require('./gettingClientMessagesSchema');
var mongoose = require('mongoose');

//GET HTTP method to /bucketlist
router.get('/', (req, res) => {
  ClientMessagesJson.find().exec(function (err, data) {
    if (err) throw err;
    res.send(data);
  });
});

//GET HTTP method to /bucketlist
router.post('/fetch', (req, res) => {
  ClientMessagesJson.find({}, {
    __v: 0
  }).limit(5).skip(Number(req.body.skip)).exec(function (err, data) {
    if (err) throw err;
    res.send(data);
  })
});


router.get('/fetchTotalCount', (req, res) => {
  ClientMessagesJson.count({}, (err, count) => {
    if (err) {
      res.send({
        status: 'error'
      })
    }
    if (count) {
      res.send({
        status: 'ok',
        body: count
      })
    }
  })
})

//POST HTTP method to /bucketlist

router.post('/', (req, res, next) => {
  let newValue = new ClientMessagesJson(req.body)
  newValue.save().then(() => {
      res.status(200).json({
        status: "ok",
        body: 'Your Request Submitted Successfuly'
      });
    })
    .catch(err => {
      console.log(err)
      res.status(400).json({
        status: "error",
        body: "Unexpected Error Occured, Please try again later"
      });
    });
});

router.post('/getClientMessageUsingId', (req, res, next) => {
  ClientMessagesJson.findOne({
    "_id": mongoose.Types.ObjectId(req.body._id)
  }, {
    _id: 0,
    __v: 0
  }).exec(function (err, ClientMessages) {
    if (err) throw err;
    res.send(ClientMessages);
  })
});


//DELETE HTTP method to /bucketlist. Here, we pass in a params which is the object id.
router.delete('/:id', (req, res, next) => {
  res.send("DELETE");
})

module.exports = router;