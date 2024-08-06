var express = require('express');
var router = express.Router();

const company = require('./company.route');
const humans = require('./humans.route');
const users = require('./securityUsers.route');
const reportFileMasters = require('./reportFileMasters.route');
const reportFileParameters = require('./reportFileParameters.route');
const ifMenus = require('./ifMenus.route');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/company',company)
router.use('/humans',humans)
router.use('/users',users)
router.use('/ifmenus',ifMenus)
router.use('/repfilpar',reportFileParameters)
router.use('/repfilmas',reportFileMasters)

module.exports = router; 
