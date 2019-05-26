// to import connection class "db".  It is possible because the class was exported (module.export)
var conn = require('./../inc/db');
var express = require('express');
var router = express.Router();


// require, response, next 
router.get('/', function(req, res, next) {
  
  // execute the query in the DB
  conn.query("SELECT * FROM tb_users ORDER BY name ",(err,results) =>{
    
    if(err){// if there is any error, response with an error message
      res.send(err);
    }else{// else, response with the results
      res.send(results);
    }
  });

});

module.exports = router;
