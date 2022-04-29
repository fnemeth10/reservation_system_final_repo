// Written by Nicholas Hussain and Frank Nemeth
// Inspired by: https://github.com/athoutam1/Restaurant-Reservation/tree/master/api/routes
// Also inspired by: https://github.com/profjake/lecture15 
// And inspired by: https://github.com/codrkai/node_react_mongodb_tutorial 


let express = require('express')
// let app = require('../Restaurant-Reservation/api/app')
const mongoose = require('mongoose')
const app = express();
const dbManager = require("./dbTestingWork/dbManager")




app.use('/login', require('./routing/login'))
app.use('/AskingInfo', require("./routing/make_reservation"))
app.use('/ManageRes',require("./routing/manage_reservation"))
app.use('/CreatingAccount',require("./routing/sign_up"))


mongoose.Promise = global.Promise
//mongoose.connect("mongodb://localhost:27017/", {useNewUrlParser: true, useUnifiedTopology: true})
// mongoose.connection.on('error', () => {
//     throw new Error(`unable to connect to database: `)
// })


app.listen(3000, (err) => {
    mongoose.connect("mongodb://localhost:27017/", {useNewUrlParser: true, useUnifiedTopology: true})
    console.log("Server is up and running");
    if (err) {console.log(err)}
});