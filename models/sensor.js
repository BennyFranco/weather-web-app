/**
 * Created by Benny on 27/03/16.
 */
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var SensorSchema = new Schema({
    name: String,
    value: String
});

module.exports = mongoose.model('sensor', SensorSchema);