/**
 * Created by Benny on 27/03/16.
 */
var mongoose = require('mongoose');
var SensorSchema = require('sensor')

var StationSchema = new mongoose.Schema({
    name: String,
    datetime: String,
    sensors: [SensorSchema]
});

module.exports = mongoose.model('Todo', StationSchema);