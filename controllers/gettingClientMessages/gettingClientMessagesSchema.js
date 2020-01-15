//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var ClientMessagesSchema = new Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
});

// Compile model from schema
var ClientMessagesSchemaJson = mongoose.model('ClientMessagesSchemaJson', ClientMessagesSchema, 'contact');

module.exports = ClientMessagesSchemaJson;