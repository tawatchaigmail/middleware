
module.exports = { development : { oracle : {
                                       client: "oracledb",
                                       connection: {
                                                user: "pintf",
                                                password: "pintf",
                                                connectString: "(DESCRIPTION =  (ADDRESS_LIST = (ADDRESS = (PROTOCOL = TCP)(HOST = 192.168.100.77)(PORT = 1521))) (CONNECT_DATA = (SERVICE_NAME = PDBPLAN) ) )",
                                                requestTimeout: 100
                                       },
                                       fetchAsString: ["number", "clob"]
                                  },
                                   sessionsOption : {
        	                              user: 'pintf',
	                                      password: 'pintf',
                                     	      connectString: '192.168.100.77/pdbplan' ,
                                            
             	                              schema: {
		                                      tableName: 'ora_sessions',
		                                      columnNames: {
			                                           session_id: 'session_id',
			                                           expires: 'expires',
			                                           data: 'attributes'
		                                      }
        
	                                      }
                                           
   

                                  },
                                 possgress : {
                                           client: "postgresql",
                                           connection: {
                                               database: "blogs",
                                               user: "postgres",
                                               password: "1234",
                                            },
                                   
                                  }
                  },
                  staging: {},
                  production: { }
    }

