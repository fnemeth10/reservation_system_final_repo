var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Restaurant = require("../dbModels/restaurant").model;
var Reservation = require("../dbModels/reservation").model;

module.exports = router;
