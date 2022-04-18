//restaurant schema

var mongoose = require("mongoose");
const userSchema = require("./user").schema;

const restSchema = new mongoose.Schema({
    // restaurantID: {
    //     type: mongoose.ObjectId, required:true
    // },
    userID: {
        required: true,
        type: userSchema
        // the code above came from the github linked in the ReadMe.md folder of dbModels.

        /*
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
        
        https://stackoverflow.com/questions/18001478/referencing-another-schema-in-mongoose

        The idea to use the mongoose.objectID came from here in the comments section of the post schema from this stackoverflow  
        */
    },
    day:Date,
    restaurantName: String,
    phone_num: Number
});
var Restaurant = mongoose.model('Restaurant',restSchema);
module.exports.model = Restaurant;
module.exports.schema = restSchema;