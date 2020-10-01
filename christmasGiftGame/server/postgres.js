const { Client } = require('pg')
const client = new Client()
var config = require('./config.json')

const connection = new Client({
    user: 	  	config.nodeloginUser,
    host: 	  	config.nodeloginHost,
    database: 	config.nodeloginDatabase,
    password: 	config.nodeloginPasswd,
    port:	  	config.nodeloginPort,
});
connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;