
const configDb = require('../config/configDb');
const knex = require("knex")(configDb.development.oracle);

//const companyController = require('../controllers/compay.cotroller');

/*
knex.select().from("COMPANIES").asCallback(function(err, rows){
    if(err)
        console.log(err);
    else
        console.table(rows);
});
*/

 // let dataCompany = wait knex('COMPANIES').where({COMPANY: 'ME'}).select();
  

 async function company(param) {  
                                            try {
                                                 console.log('function read');
                                                 var company = await knex('COMPANIES').where(param).select();
                                                 // console.log(company);
                                                 // return JSON.stringify(company);
                                                 return company;
                                                 } catch (e) {
                                                  console.log(e)
                                                 }          
 }

 module.exports = data = {
                          getAll : async () => {
                                            try {
                                                 console.log('function getAll');
                                                 var company = await knex('COMPANIES').select();
                                                 return company;
                                                 } catch (e) {
                                                   console.log(e);
                                                   return e ; 
                                                 }      
                                          },

                           getById : async (param) => {
                                            try {
                                                 console.log('function getByid');
                                                 var company = await knex('COMPANIES').where("COMPANY",param).select();
                                                 return company;
                                                 } catch (e) {
                                                   console.log(e)
                                                   return e ; 
                                                 }      

                                             },

                            create : async (param) => {
                                             try {
                                                 console.log('function create');
                                                 const company = await knex("COMPANIES").insert(param);
                                                 return company;
                                                 } catch (e) {
                                                   console.log(e);
                                                   return e ; 
                                                 }      

                                             },

                            update : async (id, param) => {
                                             try {
                                                 console.log('function create');
                                                 
                                                 const company = await knex("COMPANIES").where("COMPANY", id).update(param);
                                                 return company;
                                                 } catch (e) {
                                                   console.log(e);
                                                   return e ; 
                                                 }      

                                            },

                            delete : async (param) => {
                                                 try {
                                                 const company = await knex("COMPANIES").where("COMPANY", param).del();
                                                 return company;
                                                 } catch (e) {
                                                   console.log(e)
                                                   return e ; 
                                                 }      

                                             }
                           };

