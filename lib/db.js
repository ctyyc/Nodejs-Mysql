var mysql   = require('mysql');
var dbInfo  = require('../password');

var db = mysql.createConnection({
  host:     dbInfo.host,
  user:     dbInfo.user,
  password: dbInfo.password,
  database: dbInfo.database
});
db.connect();

module.exports = db;