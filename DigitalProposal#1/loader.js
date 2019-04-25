var anyDB = require('any-db');

var conn = anyDB.createConnection('sqlite3://game.db');

conn.query('DROP TABLE if exists usernames')
	.on('end', function(){
		console.log('DELETED TABLE');
	});
conn.query('CREATE TABLE if not exists usernames (gameID INTEGER, username varchar(255) PRIMARY KEY, groupID INTEGER)')
	.on('end', function(){
		console.log('MADE usernames TABLE!');
	});
	
conn.query('DROP TABLE if exists answers')
	.on('end', function(){
		console.log('DELETED answers TABLE');
	});
conn.query('CREATE TABLE if not exists answers (gameID INTEGER, groupID INTEGER, killer varchar(255), reasoning varchar(255), primeKey INTEGER PRIMARY KEY, time INTEGER)')
	.on('end', function(){
		console.log('MADE answers TABLE!');
	});
	