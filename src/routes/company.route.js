
const express = require('express');
const route = express.Router();

const companyController = require('../controllers/compay.controller');

route.get('/', (req,res,next) => {
   console.log(' api route');
   res.send(' company route ');
});

route.get('/readall', companyController.getAll )

route.get('/read/:id', companyController.getById )

route.post('/create', companyController.create);

route.put('/update/:id', companyController.update);

route.delete('/delete/:id', companyController.delete);

module.exports = route ;