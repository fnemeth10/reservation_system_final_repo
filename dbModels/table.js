//table schema

var mongoose = require("mongoose");
const restSchema = require("./restaurant").schema;

const tableSchema = new mongoose.Schema({
    restID: {
        required: true,
        type: restSchema
    },
    seats: Number,
    table_name: String,
    isAvailable: Boolean
});

var Table = mongoose.model('Table',tableSchema);

module.exports.model = Table;
module.exports.schema = tableSchema;
