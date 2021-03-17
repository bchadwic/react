var mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'AUTOzone3!',
	database : 'WordBubble'

});



connection.query(function(err){
	if(err){
		console.log(err.code);
		console.log(err.fatal);
	}
});

$query = 'SELECT * FROM Word';

connection.query($query, function(err, rows, fields) {
    if(err){
		console.log("An error ocurred performing the query.");
        return;
    }

    console.log("Query succesfully executed: ", rows);
});

// Close the connection
connection.end(function(){
    // The connection has been closed
});