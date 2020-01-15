require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const rtsIndex = require('./routes/index.router');
const clientMessages = require('./controllers/gettingClientMessages/gettingClientMessages');
const timeline = require('./controllers/timeline/timeline');


var app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex);
app.use('/clientMessages', clientMessages);
app.use('/clientMessages/fetch', clientMessages);
app.use('/clientMessages/fetchTotalCount', clientMessages)
app.use('/clientMessages/getClientMessageUsingId', clientMessages)
app.use('/timelineData', timeline)
app.get('/', (req, res) => {
  res.send("Invalid page");
})


// error handler
app.use((err, req, res, next) => {
  if (err.name === 'ValidationError') {
    var valErrors = [];
    Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
    res.status(422).send(valErrors)
  } else {
    console.log(err);
  }
});


// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));