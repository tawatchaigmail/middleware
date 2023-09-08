const oracledb = require('oracledb');

const mypw = ... // the user password

oracledb.getConnection(
  {
    user          : "hr",
    password      : mypw,
    connectString : "localhost/FREEPDB1"
  })
.then(function(connection) {
    return connection.execute(
     `SELECT department_id, department_name
      FROM departments
      WHERE manager_id < :id`,
     [110]  // bind value for :id
    )
    .then(function(result) {
        console.log(result.rows);
        return connection.close();
    })
    .catch(function(err) {
        console.error(err);
        return connection.close();
    });
})
.catch(function(err) {
    console.error(err);
});