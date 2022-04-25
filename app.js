require('dotenv').config();
const express = require('express')
const hbs = require('hbs');
const app = express();
const port = process.env.PORT

//servir contenido estático



app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use( express.static('public') );



app.get('/', function (req, res) {
  res.render('home', {
    nombre: 'Omar Mijangos',
    titulo: 'Curso node'
  });
});

app.get('/generic', function (req, res) {
    res.render( 'generic', {
      nombre: 'Omar Mijangos',
      titulo: 'Curso de Node'
    })
  });
app.get('/elements', function (req, res) {
    res.render('elements', {
      nombre: 'Omar Mijangos',
      titulo: 'Curso de Node'
    });
  });  

  app.get('*', function (req, res) {
    res.send(' 404 | Page not found')
  })


app.listen( port )
