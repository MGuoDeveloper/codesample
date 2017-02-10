var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReserveSchema = new Schema({
    email: String,
    people: Number, //1-20
    date: Date,
    time: String,
    status: Number, //0 waiting, 1 scheduled, 2 completed, 3 expired
    code: String
});

module.exports = mongoose.model('reserveTable', ReserveSchema);