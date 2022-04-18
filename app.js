const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/holaMundo', function (req, res) {
    res.send('Hola mundo en español')
  })

  app.get('*', function (req, res) {
    res.send(' 404 | Page not found')
  })

app.listen(8080)


