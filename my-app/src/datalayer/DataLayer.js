let mysql = require('mysql');
let connection = mysql.createConnection({
	host : 'localhost', user : 'root',
	password : 'AUTOzone3!',
	database : 'WordBubble'
});


function isAlreadyDefined(word){
	alert("called the isAlreadyDefined function");
	let query = "SELECT * FROM Word WHERE word = '" + word + "'";
	connection.query(query, function(err, rows, fields) {
	    if(err){
			console.log("An error ocurred performing the query.");
	        return;
	    }

	    console.log("Query succesfully executed: ", rows);
	});
	connection.end(function(){
	    // The connection has been closed
	});
}