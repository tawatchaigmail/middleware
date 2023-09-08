var express = require('express');
var router = express.Router();

const autController = require('../controllers/aut.controller');

/* GET aut page. */
router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Auth' });
  console.log('aut');
  next();
});

router.post('/login',autController.login)
router.get('/logout',autController.logout)
router.post('/refresh',autController.jwtRefreshTokenValidate, autController.refresh)

module.exports = router; 
