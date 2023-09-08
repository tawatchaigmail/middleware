
const express = require('express');
const route = express.Router();

const securityUsersController = require('../controllers/humans.controller');

route.get('/', (req,res,next) => {
   console.log(' api route');
   res.send(' humans route ');
});

route.get('/readall', securityUsersController.getAll )

route.get('/read/comp/:compid/user/:id', securityUsersController.getById )

route.post('/create', securityUsersController.create);

route.put('/update/comp/:compid/user/:id', securityUsersController.update);

route.delete('/delete/comp/:compid/user/:id', securityUsersController.delete);

module.exports = route ;