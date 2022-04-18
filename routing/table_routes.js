var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Reservation = require("../dbModels/reservation").model;
var User = require("../dbModels/user").model;
var Table = require("../dbModels/table").model;

module.exports = router;
