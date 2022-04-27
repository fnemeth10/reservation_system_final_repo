// Written by Nicholas Hussain and Frank Nemeth
// Inspired by: https://github.com/athoutam1/Restaurant-Reservation/tree/master/api/routes
// Also inspired by: https://github.com/profjake/lecture15 
// And inspired by: https://github.com/codrkai/node_react_mongodb_tutorial 

let express = require('express')
// let app = require('../Restaurant-Reservation/api/app')
const mongoose = require('mongoose')
const app = express();

app.use('/routing', require('./routing/login'))

mongoose.Promise = global.Promise
mongoose.connect("mongodb://127.0.0.1:27017/testDB", {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: `)
})

app.listen(3000, (err) => {
    if (err) {console.log(err)}
});