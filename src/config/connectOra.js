const oracledb = require("oracledb");
const dbConfig = require('./configDb');

// oracledb.initOracleClient({ libDir: "C:\\Oracle\\instantclient_19_18x64" });

// const connection = async function runconnect()  {
module.exports = conectOraDb = { oraConnect : async () => {
                                                      try {
                                                           // console.log(dbConfig.development.sessionsOption)
                                                            connection = await oracledb.getConnection(dbConfig.development.sessionsOption);
                                                            console.log( await connection.execute(`SELECT SESSION_ID FROM SESSIONS `));
                                                            return  connection ; 

                                                      } catch (err) {
                                                         console.error(err);
                                                      } finally {
                                                         if (connection) {
                                                         try {
                                                             await connection.close();
                                                         } catch (err) {
                                                             console.error(err);
                                                         }
                                                         } // if                                                
                                                     } // end
                                                
                                               },

}

// exports.conectOraDb =  connection;
//exports connection;


