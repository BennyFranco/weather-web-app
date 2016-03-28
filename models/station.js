/**
 * Created by Benny on 27/03/16.
 */
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var StationSchema = Schema({
    name: String,
    DateTime: String
    //sensors: [sensor]
});

module.exports = mongoose.model('JAZMIN', StationSchema);