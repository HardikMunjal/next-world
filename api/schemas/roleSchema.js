'use strict'


var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var roleSchema = new Schema({
	name:{
		type:String,
		default:null
	},
	description:{
		type:String,
		default:null
	},
	created_by:{
		type:String,
		default:null
	},
	createdAt:{
		type:Date,
		default:Date.now
	},
	updatedAt:{
		type:Date,
		default:Date.now
	}
});

var role = mongoose.model('role', roleSchema);

module.exports = role;