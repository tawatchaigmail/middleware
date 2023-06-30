const oracledb = require("oracledb");
const configDb = require('./configDb');
oracledb.initOracleClient({ libDir: "C:\\Oracle\\instantclient_19_18x64" });
/*
const knex = require("knex")({
    client: "oracledb",
    connection: {
        user: "pintf",
        password: "pintf",
        connectString: "(DESCRIPTION =  (ADDRESS_LIST = (ADDRESS = (PROTOCOL = TCP)(HOST = 192.168.100.77)(PORT = 1521))) (CONNECT_DATA = (SERVICE_NAME = PDBPLAN) ) )",
        requestTimeout: 100
    },
    fetchAsString: ["number", "clob"]
});

*/
 const knex = require("knex")(configDb.development.oracle);

 module,exports = knex ;
