
const express = require('express');
const route = express.Router();

const humansController = require('../controllers/humans.controller');

route.get('/', (req,res,next) => {
   console.log(' api route');
   res.send(' humans route ');
});

route.get('/readall', humansController.getAll )

route.get('/read/comp/:compid/human/:humanid', humansController.getById )

route.post('/create', humansController.create);

route.put('/update/comp/:compid/human/:humanid', humansController.update);

route.delete('/delete/comp/:compid/human/:humanid', humansController.delete);

module.exports = route ;