// to import connection class "db".  It is possible because the class was exported (module.export)
var conn = require ('./../inc/db');
var express = require('express');
var router = express.Router();

/* GET home page (index.ejs) */
router.get('/', function(req, res, next) {

  // to execute the query
  conn.query(`
    SELECT * FROM tb_menus ORDER BY title
  `, (err,results)=>{
    
    if(err){ // if there is an error, show the message error
      console.log(err);
    
    }
  
    // render method mix the results with EJS page(index)
    res.render('index', { 
      title: 'Restaurante Saboroso',
      menus: results // (JSON) results of the query
    
    });
  });
});

/* GET contacts.ejs page */
router.get('/contacts', function(req,res,next){
  
  res.render('contacts',{
  title: 'Contato',
  background: 'images/img_bg_3.jpg',
  h1 : 'Diga um Oi'
  });

});

/* GET menus.ejs page */
router.get('/menus', function(req,res,next){

  res.render('menus',{
  title: 'Menu',
  background: 'images/img_bg_1.jpg',
  h1 : 'Saboreie nosso menu'
  });

});

/* GET reservations.ejs page */
router.get('/reservations', function(req,res,next){

  res.render('reservations',{
  title: 'Reservas',
  background: 'images/img_bg_2.jpg',
  h1 : 'Reserve uma mesa'});

});

/* GET services.ejs page */
router.get('/services', function(req,res,next){

  res.render('services',{
  title: 'Serviços',
  background: 'images/img_bg_1.jpg',
  h1 : 'É um prazer poder servir'
  });

});

module.exports = router;
