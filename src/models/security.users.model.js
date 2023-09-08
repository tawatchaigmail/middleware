const configDb = require('../config/configDb');
const knex = require("knex")(configDb.development.oracle);
 
 module.exports  = securityUsersModel = {
                          getAll : async () => {
                                            try {
                                                 console.log('function getAll');
                                                 var response = await knex('SECURITY_USERS').select();
                                                 return response;
                                                 } catch (e) {
                                                   console.log(e);
                                                   return e ; 
                                                 }      
                                          },

                           getById : async (params) => {
                                            try {
                                                 console.log('function getByid');
                                                 let paramWare = { "COMPANY" : params.compid , "USERNAME" : params.id }
                                                 var response = await knex('SECURITY_USERS').where(paramWare).select();
                                                 return response;
                                                 } catch (e) {
                                                   console.log(e)
                                                   return e ; 
                                                 }      
                                             },

                            create : async (data) => {
                                             try {
                                                 console.log('function create');
                                                 const response = await knex("SECURITY_USERS").insert(data);
                                                 return response;
                                                 } catch (e) {
                                                   console.log(e);
                                                   return e ; 
                                                 }      
                                             },

                            update : async (params,data) => {
                                             try {
                                                 console.log('function create');                                                 
                                                 let paramWare = { "COMPANY" : params.compid , "USERNAME" : params.id }
                                                 const response = await knex("SECURITY_USERS").where(paramWare).update(data);
                                                 return response;
                                                 } catch (e) {
                                                   console.log(e);
                                                   return e ; 
                                                 }      
                                            },

                            delete : async (params) => {
                                                 try {
                                                      console.log('function delete');
                                                      let paramWare = { "COMPANY" : params.compid , "USERNAME" : params.id }
                                                      const response = await knex("SECURITY_USERS").where(paramWare).del();
                                                      return response;
                                                      } catch (e) {
                                                       console.log(e)
                                                       return e ; 
                                                      }      
                                             }
                           };


