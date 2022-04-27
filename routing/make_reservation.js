// Written by Frank Nemeth
// Inspired by: https://github.com/athoutam1/Restaurant-Reservation/tree/master/api/routes
// Also inspired by: https://github.com/profjake/lecture15
// And inspired by: https://github.com/codrkai/node_react_mongodb_tutorial 

const express = require('express');
const router = express.Router();
const http = require('http');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')


const Reservation = require('../dbModels/reservation').model;
const Restaurant = require('../dbModels/restaurant').model;
const Table = require('../dbModels/table').model;
const User = require('../dbModels/user').model;

router.post('/', (req, res, next) => {
    res.send("REQUEST MADE");
    
    
});



module.exports = router;