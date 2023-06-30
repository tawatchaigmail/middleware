var express = require('express');
var router = express.Router();

const company = require('./company.route');
const humans = require('./humans.route');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/company',company)
router.use('/humans',humans)

module.exports = router; 
