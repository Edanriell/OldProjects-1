var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    avatar: {type: String, default: 'https://avatarfiles.alphacoders.com/468/46830.png'},
    firstName: {type: String, default: ''},
    lastName: {type: String, default: ''},
    email: {type: String, default: ''},
    isAdmin: {type: Boolean, default: false},
    notifications: [
    	{
    	   type: mongoose.Schema.Types.ObjectId,
    	   ref: 'Notification'
    	}
    ],
    followers: [
    	{
    		type: mongoose.Schema.Types.ObjectId,
    		ref: 'User'
    	}
    ]
});

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("User", UserSchema);