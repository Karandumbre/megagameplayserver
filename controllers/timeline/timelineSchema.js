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

// Compile model from schema
var TimelineSchemaJson = mongoose.model('TimelineSchemaJson', TimelineSchema, 'timeline');

module.exports = TimelineSchemaJson;