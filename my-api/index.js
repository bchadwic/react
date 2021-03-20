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
 
 /*
This request will get all the words currently in the data base
 */
app.get('/api/get-words',(req, res) => {
  let sql = "SELECT * FROM Word";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
 /*
 This request will get an individual word and it associative properties
 */
app.get('/api/retrieve-word/:word',(req, res) => {
  let sql = "SELECT * FROM Word WHERE word="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

 /*
 This request will add a word to the data base
 */
app.post('/api/add-word',(req, res) => {
  let data = {word: req.body.word, definition: req.body.definition, user_name: req.body.user_name};
  let sql = "INSERT INTO Word SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
/*
TODO:
make another table that takes a word id, and finds the associative definitions for the word
CREATE TABLE Definition // add in a row for word id, and username submitted

json object that gets added to the database

request
{
    "word": "json",
    "definition": "javascript object notation",
    "user_name" : "ben"
}

response
{"status":200,"error":null,"response":
{"fieldCount":0,
"affectedRows":1,
"insertId":0,
"serverStatus":2,
"warningCount":0,
"message":"",
"protocol41":true,
"changedRows":0}}
*/

//Server listening
app.listen(3001,() =>{
  console.log('Server started on port 3000...');
});