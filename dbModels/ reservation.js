// reservation schema
var mongoose = require("mongoose");
const userSchema = require("./user").schema;
const restSchema = require("./restaurant").schema;
const tableSchema = require("./table").schema;

const reserveSchema = new mongoose.Schema({
   
    userID: {
        required:true,
        type: userSchema
    },
    restID: {
        required:true,
        type: restSchema
    },
    tableID:{
        required:true,
        type: tableSchema
    },
    date: Date,
    time: Number
});
var Reservation = mongoose.model('Reservation',reserveSchema);

module.exports.model = Reservation;
module.exports.schema = reserveSchema;