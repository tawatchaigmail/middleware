const model = require('../models/ifMenus.model');

 module.exports = ifMenusController = {

  getAll : async (req, res, next) => {
    try {
      const dataAll = await model.getAll();

     if (dataAll) {
   //   res.status(200).json({data : reportFileMasters})  ;
        res.json(dataAll);
   //   res.send(dataAll);

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
      const dataById = await model.getById(req.params.id);
      if (dataById) {
   //   res.json(dataById);
   //   res.send(dataById);

       res.status(200).json({ data : dataById} )  
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
      console.log();
      console.log(req.body);
      console.log();
      const dataCreate = await model.create(req.body);
     if (dataCreate) {
       // res.status(200).json({updated: reportFileMaster})
       res.json(dataCreate);   
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
      const dataUpdate = await model.update(req.params.id, req.body);

      if (dataUpdate) {
      //  res.status(200).json({updated: reportFileMaster})
        res.json(dataUpdate);   
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
      const dataDelete = await model.delete(req.params.id);
      if (dataDelete) {
     //  res.status(200).json({delete: bicycle})
       res.json(dataDelete);   
      } else {
        res.status(404).json({message: "Record not found"});
      }        
    } catch (err) {
      
      res.status(500).json({message: "Error delete", error: err});
      next(err);
    }
  }

};