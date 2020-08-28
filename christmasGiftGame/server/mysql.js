var mysql = require('mysql');
var config = require('./config.json')

var connection = mysql.createConnection({
	host     : config.nodeloginHost,
	user     : config.nodeloginUser,
	password : config.nodeloginPasswd,
	database : config.nodeloginDatabase
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;