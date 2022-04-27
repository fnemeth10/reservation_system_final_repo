// Written by Nicholas Hussain and Frank Nemeth
// Inspired by: https://github.com/athoutam1/Restaurant-Reservation/tree/master/api/routes
// Also inspired by: https://github.com/profjake/lecture15
// And inspired by: https://github.com/codrkai/node_react_mongodb_tutorial 

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
let dbManager = require('../dbTestingWork/dbManager');


const User = require("../dbModels/user").model;

router.get("/login/:Username/:Password", async function(req, res){
    try {
        let user = await User.findOne({
          where: {
            username: req.body.Username
          }
        }).lean();
    
        if (user) {
          if(req.body.Password === user.password){
              res.status(200).send("Log In Success");
          } else res.status(401).send("Invalid Password");
        } else res.status(401).send("Invalid Username");
    }
    catch(e){
        res.status(404).send("Unknown Error");
    }
});

module.exports = router;
