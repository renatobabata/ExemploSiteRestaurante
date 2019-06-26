// The routes/index.js is defined is the app.js //

// to import connection class "db".  It is possible because the class was exported (module.export)
var conn = require ('./../inc/db');
var express = require('express');
// to import inc/menus.js 
var menus = require('./../inc/menus');
// to import inc/reservations.js 
var reservations = require('./../inc/reservations');
// to import inc/contacts.js 
var contacts = require('./../inc/contacts');
var router = express.Router();

/* GET home page (index.ejs) */
router.get('/', function(req, res, next) {

  // It is the return of a promise defined in inc/menus.js
  menus.getMenus().then(results => {
    // render method mix the results with EJS page(index)
    res.render('index', { 
      title: 'Restaurante Saboroso',
      menus: results, // (JSON) results of the query
      isHome: true // to identify it is Home Page 
    });
  });
});

/* GET contacts.ejs page */
router.get('/contacts', function(req,res,next){
  
  contacts.render(req,res);
  
});

/* POST contacts.ejs page */
router.post('/contacts', function(req,res,next){
  console.log("contacts post");

  //res.send(req.body);

  if(!req.body.name){
    console.log("contacts post1");
    contacts.render(req,res,"Informe o nome");
  }else if(!req.body.email){
    contacts.render(req,res,"Informe o e-mail");
  }else if(!req.body.message){
    contacts.render(req,res,"Digite a mensagem");
  }else{
    console.log("contacts post2");

    contacts.save(req.body).then(results =>{
      req.body = {};
      contacts.render(req,res,null,"Mensagem enviada com sucesso");
    }).catch(err =>{
      contacts.render(req,res,err.message);
    }); 
  }
});

/* GET menus.ejs page */
router.get('/menus', function(req,res,next){

  menus.getMenus().then(results => {
    // render method mix the results with EJS page(index)
    res.render('menus',{
      title: 'Menu',
      background: 'images/img_bg_1.jpg',
      h1 : 'Saboreie nosso menu',
      menus: results
    });
  });
});

/* GET reservations.ejs page */
router.get('/reservations', function(req,res,next){

  reservations.render(req,res);

});

/* POST reservations.ejs page */
router.post('/reservations', function(req,res,next){
  // req.body = request body that is sent when required 
  // req.body is defined in app.js
  // Express is used to decode the "body" information automatically
  // app.use(express.json());
  // app.use(express.urlencoded({ extended: false }));
  
  if(!req.body.name){
    reservations.render(req,res,"Digite o nome");
  }else if(!req.body.email){
    reservations.render(req,res,"Digite o e-mail");
  }else if(!req.body.people){
    reservations.render(req,res,"Digite a quantidade de pessoas");
  }else if(!req.body.date){
    reservations.render(req,res,"Selecione a data");
  }else if(!req.body.time){
    reservations.render(req,res,"Selecione o horário");
  }else{

    reservations.save(req.body).then(results => {

      // clean the form 
      req.body = {};

      reservations.render(req,res,null,"Reserva realizada com sucesso");

    }).catch(err => {
      
      reservations.render(req,res,err.message);

    });
  }
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
