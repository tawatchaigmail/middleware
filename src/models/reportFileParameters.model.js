
const configDb = require('../config/configDb');
const knex = require("knex")(configDb.development.oracle);

//const reportFileParametersController = require('../controllers/compay.cotroller');

/*
knex.select().from("REPORT_FILE_MASTERS").asCallback(function(err, rows){
    if(err)
        console.log(err);
    else
        console.table(rows);
});
*/

 // let dataCompany = wait knex('REPORT_FILE_MASTERS').where({REPORT_ID: '1'}).select();
  

 async function reportFileMaster(param) {  
                                            try {
                                                 console.log('function read');
                                                 var reportFileMaster = await knex('REPORT_FILE_PARAMETERS').where(param).select();
                                                 //console.log(reportFileMaster);
                                                 // return JSON.stringify(reportFileMaster);
                                                 return reportFileMaster;
                                                 } catch (e) {
                                                  console.log(e)
                                                 }          
 }

 module.exports = data = {
                          getAll : async () => {
                                            try {
                                                 console.log('function getAll');
                                                 var dataAll = await knex('REPORT_FILE_PARAMETERS').select();
                                                 return dataAll;
                                                 } catch (e) {
                                                   console.log(e);
                                                   return e ; 
                                                 }      
                                          },

                           getById : async (param) => {
                                            try {
                                                 console.log('function getByid');
                                                 var dataById = await knex('REPORT_FILE_PARAMETERS').where("REPORT_ID",param).select();
                                                 return dataById;
                                                 } catch (e) {
                                                   console.log(e)
                                                   return e ; 
                                                 }      

                                             },

                            create : async (param) => {
                                             try {
                                                 console.log('function create '+param);
                                                 const dataCreate = await knex("REPORT_FILE_PARAMETERS").insert(param);
                                                 return dataCreate;
                                                 } catch (e) {
                                                   console.log(e);
                                                   return e ; 
                                                 }      

                                             },

                            update : async (id, param) => {
                                             try {
                                                 console.log('function create');
                                                 
                                                 const dataUpdate = await knex("REPORT_FILE_PARAMETERS").where("REPORT_ID", id).update(param);
                                                 return dataUpdate;
                                                 } catch (e) {
                                                   console.log(e);
                                                   return e ; 
                                                 }      

                                            },

                            delete : async (param) => {
                                                 try {
                                                 const dataDelete = await knex("REPORT_FILE_PARAMETERS").where("REPORT_ID", param).del();
                                                 return dataDelete;
                                                 } catch (e) {
                                                   console.log(e)
                                                   return e ; 
                                                 }      

                                             }
                           };

