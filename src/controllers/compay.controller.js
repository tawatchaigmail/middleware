const companyModel = require('../models/company.model');

 module.exports = companyController = {

  getAll : async (req, res, next) => {
    try {
      const companies = await companyModel.getAll();

     if (companies) {
   //   res.status(200).json({data : companies})  ;
        res.json(companies);
   //   res.send(companies);

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
      const companie = await companyModel.getById(req.params.id);
      if (companie) {
   //   res.json(companie);
   //   res.send(companie);

       res.status(200).json({ data : companie} )  
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
      const companie = await companyModel.create(req.body);
     if (companie) {
       // res.status(200).json({updated: companie})
       res.json(companie);   
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
      const companie = await companyModel.update(req.params.id, req.body);

      if (companie) {
      //  res.status(200).json({updated: companie})
        res.json(companie);   
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
      console.log(' req.params.id '+req.params.id);
      const companie = await companyModel.delete(req.params.id);
      if (companie) {
     //  res.status(200).json({delete: companie})
       res.json(companie);   
      } else {
        res.status(404).json({message: "Record not found"});
      }        
    } catch (err) {
      
      res.status(500).json({message: "Error delete", error: err});
      next(err);
    }
  }

};