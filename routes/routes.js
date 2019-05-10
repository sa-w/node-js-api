var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

let mysql = require('mysql');

let db = require('../controllers/model.js');

router.post('/createName/:name/createColour/:colour',urlencodedParser, function(req, res){
    let connection = mysql.createConnection(db);

    let pstmt = `INSERT INTO fruits(name,colour)
                VALUES(?,?)`;
    let data = [req.params.name,req.params.colour];
    
                connection.query(pstmt,data, (err, results, fields) => {
                    if(err){
                        return console.error(err.message);
                    }
    
                    console.log('ID:' + results.insertid);
                    res.json(results);
                });
    
                connection.end();
});

router.get('/read',function(req,res){
    let connection = mysql.createConnection(db);

    let pstmt = `SELECT * FROM fruits`;
                connection.query(pstmt, (error, results, fields) => {
                    if(error){
                        return console.error(error.message);
                    }
    
                    console.log(results);
                    res.json(results);
                });
    
                connection.end();
});

router.post('/updateName/:name/id/:id',urlencodedParser, function(req,res){
    let connection = mysql.createConnection(db);

    let pstmt = `UPDATE fruits
                SET name = ?
                WHERE id = ?`;
    let data = [req.params.name,req.params.id];
                connection.query(pstmt, data, (error, results, fields) => {
                    if(error){
                        return console.error(error.message);
                    }
    
                    console.log(results);
                    res.json(results);
                });
    
                connection.end();
});

router.post('/updateColour/:colour/id/:id',urlencodedParser, function(req,res){
    let connection = mysql.createConnection(db);

    let pstmt = `UPDATE fruits
                SET colour = ?
                WHERE id = ?`;
    let data = [req.params.colour,req.params.id];
                connection.query(pstmt, data, (error, results, fields) => {
                    if(error){
                        return console.error(error.message);
                    }
    
                    console.log(results);
                    res.json(results);
                });
    
                connection.end();
});

router.delete('/delete/:delid',urlencodedParser, function(req,res){
    let connection = mysql.createConnection(db);

    let pstmt = `DELETE FROM fruits
                WHERE id = ?`;
    let data = [req.params.delid];
                connection.query(pstmt,data, (error, results, fields) => {
                    if(error){
                        return console.error(error.message);
                    }
    
                    console.log(results);
                    res.json(results);
                });
    
                connection.end();
});

module.exports = router;