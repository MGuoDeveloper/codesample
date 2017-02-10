var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	firstname: String,
	lastname: String,
	phone: String,
	email: String,
	password: String,
	owner: Boolean //true is owner, false is customer
});

module.exports = mongoose.model('userTable', UserSchema);