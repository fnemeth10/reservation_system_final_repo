//restaurant schema

var mongoose = require("mongoose");
const userSchema = require("./user").schema;

const restSchema = new mongoose.Schema({
    userID: {
        required: true,
        type: userSchema
        // the code above came from the github linked in the ReadMe.md folder of dbModels.
    },
    day:Date,
    restaurantName: String,
    phone_num: Number
});
var Restaurant = mongoose.model('Restaurant',restSchema);
module.exports.model = Restaurant;
module.exports.schema = restSchema;