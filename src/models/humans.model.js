const configDb = require('../config/configDb');
const knex = require("knex")(configDb.development.oracle);
 
 module.exports  = humansModel = {
                          getAll : async () => {
                                            try {
                                                 console.log('function getAll');
                                                 var response = await knex('HUMANS').select();
                                                 return response;
                                                 } catch (e) {
                                                   console.log(e);
                                                   return e ; 
                                                 }      
                                          },

                           getById : async (params) => {
                                            try {
                                                 console.log('function getByid');
                                                 let paramWare = { "COMPANY" : params.compid , "HUMAN_CODE" : params.humanid }
                                                 var response = await knex('HUMANS').where(paramWare).select();
                                                 return response;
                                                 } catch (e) {
                                                   console.log(e)
                                                   return e ; 
                                                 }      
                                             },

                            create : async (data) => {
                                             try {
                                                 console.log('function create');
                                                 const response = await knex("HUMANS").insert(data);
                                                 return response;
                                                 } catch (e) {
                                                   console.log(e);
                                                   return e ; 
                                                 }      
                                             },

                            update : async (params,data) => {
                                             try {
                                                 console.log('function create');                                                 
                                                 let paramWare = { "COMPANY" : params.compid , "HUMAN_CODE" : params.humanid }
                                                 const response = await knex("HUMANS").where(paramWare).update(data);
                                                 return response;
                                                 } catch (e) {
                                                   console.log(e);
                                                   return e ; 
                                                 }      
                                            },

                            delete : async (params) => {
                                                 try {
                                                      console.log('function delete');
                                                      let paramWare = { "COMPANY" : params.compid , "HUMAN_CODE" : params.humanid }
                                                      const response = await knex("HUMANS").where(paramWare).del();
                                                      return response;
                                                      } catch (e) {
                                                       console.log(e)
                                                       return e ; 
                                                      }      
                                             }
                           };


