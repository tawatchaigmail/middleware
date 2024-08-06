
const express = require('express');
const route = express.Router();

const controller = require('../controllers/ifMenus.controller');

route.get('/', (req,res,next) => {
   console.log(' api route');
   res.send(' ifMenus route ');
});

route.get('/readall', controller.getAll )

route.get('/read/:id', controller.getById )

route.post('/create', controller.create);

route.put('/update/:id', controller.update);

route.delete('/delete/:id', controller.delete);

module.exports = route ;