const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
 
// use the body parser to convert data to json
app.use(bodyParser.json());
 
//create database connection using mysql credentials
let conn = mysql.createConnection({
	host : 'localhost', 
	user : 'root',
	password : 'AUTOzone3!',
	database : 'WordBubble'
});
 
//connect to database, check to see if there are any errors
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 
//show all words in WordBubble table 
app.get('/api/words',(req, res) => {
  let sql = "SELECT * FROM Word";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//show all words in WordBubble table 
app.get('/api/word/:id',(req, res) => {
  let sql = "SELECT * FROM Word WHERE word="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//Server listening
app.listen(3001,() =>{
  console.log('Server started on port 3000...');
});