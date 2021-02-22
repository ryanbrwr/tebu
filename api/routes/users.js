var express = require('express');
var router = express.Router();
const Plan = require('../models/plan');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let id = "510N0rmzZCdo1CIvxWAtyRq1jTD2"
  Plan.find({userUID: id}).then((data) => {
    console.log(data)
  }).catch((error) => {
    console.log(error)
  });
});

module.exports = router;
