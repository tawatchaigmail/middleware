
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
                                     	      connectString: '192.168.100.77/pdbplan'
                                            /*
             	                              schema: {
		                                      tableName: 'custom_sessions_table_name',
		                                      columnNames: {
			                                           session_id: 'custom_session_id',
			                                           expires: 'custom_expires_column_name',
			                                           data: 'custom_data_column_name'
		                                      }
        
	                                      }
                                           */
   

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

