var express = require('express');
var router = express.Router();
var session = require('express-session');
var connection = require('../postgres.js')
//var connection = require('../mysql.js')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', {
    title: "Christmas random game"
  });
});


router.post('/', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (!error) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

module.exports = router;
