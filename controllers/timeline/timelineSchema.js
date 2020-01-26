//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var TimelineSchema = new Schema({
    journey: {
        type: String
    },
    items: {
        type: Array
    }
});


var EventDatesSchema = new Schema({
    title: {
        type: String
    },
    date: {
        type: Date
    },
    game: {
        type: String
    }
})
// Compile model from schema
var TimelineSchemaJson = mongoose.model('TimelineSchemaJson', TimelineSchema, 'timeline');
var EventDatesJson = mongoose.model('EventDatesJson', EventDatesSchema, 'eventdates')
module.exports = {
    TimelineSchemaJson: TimelineSchemaJson,
    EventDatesJson: EventDatesJson,
};