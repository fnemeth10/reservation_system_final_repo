var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
let dbManager = require('..dbTestingWork/dbManager');

const User = require("../dbModels/user").model;

router.get("/LoginBox/:Username/:Password", function(req, res){
    try {
        let user = User.findOne({
          where: {
            username: req.body.Username
          }
        });
    
        if (user) {
          let password = User.findOne({
              where: {
                  password: req.body.Password
              }
          })
          if(password){
              res.status(200).send("Log In Success");
          }
        }
    }
    catch(e){
        console.log(e.message);
    }
});

module.exports = router;
