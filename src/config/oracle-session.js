var oracledb = require('oracledb');
var session = require('express-session');
var oracleDbStore = require('express-oracle-session')(session);

var options = {
	user: 'pintf',
	password: 'pintf',
	connectString: '192.168.100.77/pdbplan'
};

oracledb.createPool(options, function(err, pool) {
      if (err) {
        console.error("createPool() error: " + err.message);
        return;
			}
			pool.getConnection(function(err, connection) {
	 			if (err) {
		 			handleError(response, "getConnection() error", err);
		 			return;
				}
				var sessionStore = new oracleDbStore({}/* session store options */, connection);
			});
		});