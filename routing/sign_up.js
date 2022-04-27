// Written by Frank Nemeth
// Inspired by: https://github.com/athoutam1/Restaurant-Reservation/tree/master/api/routes
// Also inspired by: https://github.com/profjake/lecture15
// And inspired by: https://github.com/codrkai/node_react_mongodb_tutorial 

const express = require('express');
const router = express.Router();
const http = require('http');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

// const Reservation = require('../dbModels/reservation').model;
// const Restaurant = require('../dbModels/restaurant').model;
// const Table = require('../dbModels/table').model;

const User = require('../dbModels/user').model;

router.post("CreatingAccount", async function(req, res) {
    try{

        let user = await User.create({
            
            name:{
                firstName:req.body.firstName,
                lastName:req.body.lastName
            },
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password,
            phone_num: req.body.phone_num,
            owner: req.body.owner

        })
        res.send("Account created successfully!")
    }
    
    catch(e){
        res.status(404).send("Account not created due to an unknown error!");
    }
})

module.exports = router;