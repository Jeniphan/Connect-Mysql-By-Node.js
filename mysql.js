const mysql = require('mysql');
const express = require('express');

const db = mysql.createConnection({
    host: '34.87.6.184',
    port: 3306,
    user: 'esp33',
    password: '@Jj068209',
    database:'EPS_32'
});

db.connect();

const app = express();

app.get('/user',(req, res) => {
  const sql = 'SELECT * FROM Temperature';
  const query = db.query(sql, (err, results) => {
    if(err) {
      throw err;
    }
    console.log(results);

    res.send(results);
  });

});

app.listen('3001',function () {
  console.log('start port 3001');
});