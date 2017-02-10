var express = require('express');
var router = express.Router();
var fs = require("fs");
var https=require('https');
var async = require("async");
var request=require('request');

// mongodb model
/*
var endpointTable=require('../Dao/endpointTable');
var appTable=require('../Dao/appTable');
var jobsTable=require('../Dao/jobsTable');
var userTable=require('../Dao/userTable');
*/

// home.ejs
router.get('/', function(req, res){
    res.render("index");
});

router.get('/home', function(req, res){
    res.render("index");
});

router.get('/applications', function(req, res){
    res.render("apps");
});

module.exports = router;
