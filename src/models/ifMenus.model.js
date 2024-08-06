
const configDb = require('../config/configDb');
const knex = require("knex")(configDb.development.oracle);

//const companyController = require('../controllers/compay.cotroller');

/*
knex.select().from("IF_MENUS").asCallback(function(err, rows){
    if(err)
        console.log(err);
    else
        console.table(rows);
});
*/

 // let dataCompany = wait knex('REPORT_FILE_MASTERS').where({REPORT_ID: '1'}).select();
  

 async function ifMenu(param) {  
                                            try {
                                                 console.log('function read');
                                                 var reportFileMaster = await knex('IF_MENUS').where(param).select();
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
                                                 var dataAll = await knex('IF_MENUS').select();
                                                 return dataAll;
                                                 } catch (e) {
                                                   console.log(e);
                                                   return e ; 
                                                 }      
                                          },

                           getById : async (param) => {
                                            try {
                                                 console.log('function getByid');
                                                 var dataById = await knex('IF_MENUS').where("MENU_ID",param).select();
                                                 return dataById;
                                                 } catch (e) {
                                                   console.log(e)
                                                   return e ; 
                                                 }      

                                             },

                            create : async (param) => {
                                             try {
                                                 console.log('function create '+param);
                                                 const dataCreate = await knex("MENU_ID").insert(param);
                                                 return dataCreate;
                                                 } catch (e) {
                                                   console.log(e);
                                                   return e ; 
                                                 }      

                                             },

                            update : async (id, param) => {
                                             try {
                                                 console.log('function create');
                                                 
                                                 const dataUpdate = await knex("IF_MENUS").where("MENU_ID", id).update(param);
                                                 return dataUpdate;
                                                 } catch (e) {
                                                   console.log(e);
                                                   return e ; 
                                                 }      

                                            },

                            delete : async (param) => {
                                                 try {
                                                 const dataDelete = await knex("IF_MENUS").where("MENU_ID", param).del();
                                                 return dataDelete;
                                                 } catch (e) {
                                                   console.log(e)
                                                   return e ; 
                                                 }      

                                             }
                           };

