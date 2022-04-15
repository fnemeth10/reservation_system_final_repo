var mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    // userID: {
    //     type: mongoose.ObjectId,required: true
    // },
    //
    name:{
        firstName:{type: String},
        lastName:{type: String}
    },
    email: String,
    password: String,
    phone_num: Number,
    owner: Boolean
});
var User = mongoose.model('User',userSchema);

module.exports.model = User;
module.exports.schema = userSchema;