var anyDB = require('any-db');

var conn = anyDB.createConnection('sqlite3://game.db');

conn.query('DROP TABLE if exists usernames')
	.on('end', function(){
		console.log('DELETED TABLE');
	});
conn.query('CREATE TABLE if not exists usernames (gameID INTEGER, username varchar(255) PRIMARY KEY, groupID INTEGER)')
	.on('end', function(){
		console.log('MADE TABLE!');
	});