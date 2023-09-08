const securityUsersModel = require('../models/security.users.model');

 module.exports = securityUserController = {

  getAll : async (req, res, next) => {
    try {
      const jsonData = await securityUsersModel.getAll();

     if (jsonData) {
   //   res.status(200).json({data : jsonData})  ;
        res.json(jsonData);
   //   res.send(jsonData);

      }
      else{
       res.status(300).json({message: "Record not found"});
      }
 
    } catch (err) {

      res.status(500).json({message: "Error get data ", error: err})
      next(err);
    } 
  },
 
  getById : async (req, res, next) => {
    try {
      const jsonData = await securityUsersModel.getById(req.params);
      if (jsonData) {
   //   res.json(jsonData);
   //   res.send(jsonData);

       res.status(200).json({ data : jsonData} )  
      }
      else{
       res.status(300).json({message: "Record not found"});
      }
      
    } catch (err) {

      res.status(500).json({message: "Error get data ", error: err})
      next(err);
    }
  },

  create : async (req, res, next) => {
    try {
      const jsonData = await securityUsersModel.create(req.body);
     if (jsonData) {
       // res.status(200).json({updated: jsonData})
       res.json(jsonData);   
     } else {
       res.status(404).json({message: " Cant 't Creaete Record "})
     }
      
    } catch (err) {
      res.status(500).json({message: "Error create Recore", error: err})
      next(err);
    }
  },

  update : async (req, res, next) => {
    try {
      const jsonData = await securityUsersModel.update(req.params, req.body);

      if (jsonData) {
      //  res.status(200).json({updated: jsonData})
        res.json(jsonData);   
      } else {
        res.status(404).json({message: "Record not found"})
      }      
    } catch (err) {
      res.status(500).json({message: "Error updating new post", error: err})
      next(err);
    }
  },
    delete : async (req, res, next) => {
    try {
      console.log(' req.params.id '+req.params);
      const jsonData = await securityUsersModel.delete(req.params);
      if (jsonData) {
     //  res.status(200).json({delete: jsonData})
       res.json(jsonData);   
      } else {
        res.status(404).json({message: "Record not found"});
      }        
    } catch (err) {
      
      res.status(500).json({message: "Error delete", error: err});
      next(err);
    }
  }

};