const express = require('express')
const app = express()


//servir contenido estático


app.use( express.static('public') );



app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/generic', function (req, res) {
    res.sendFile(__dirname + '/public/generic.html')
  })
app.get('/elements', function (req, res) {
    res.sendFile(__dirname + '/public/elements.html')
  })

  app.get('*', function (req, res) {
    res.send(' 404 | Page not found')
  })

app.listen(8080)


