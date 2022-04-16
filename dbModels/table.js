//table schema

var mongoose = require("mongoose");
const restSchema = require("./restaurant").schema;

const tableSchema = new mongoose.Schema({
    // tableID:{
    //     type: mongoose.ObjectId, required:true
    // },
    restID: {
        required: true,
        type: restSchema
    },
    seats: Number,
    table_name: String
});

var Table = mongoose.model('Table',tableSchema);

module.exports.model = Table;
module.exports.schema = tableSchema;
