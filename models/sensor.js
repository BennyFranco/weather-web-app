/**
 * Created by Benny on 27/03/16.
 */
var mongoose = require('mongoose');

var SensorSchema = new mongoose.Schema({
    name: String,
    value: String
});

module.exports = mongoose.model('Todo', SensorSchema);