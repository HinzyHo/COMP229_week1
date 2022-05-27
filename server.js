const express = require("express")
const app = new express()

app.get('/', function(req, res){
    res.send('Home')
})

app.get('/hello', function(req, res){
    res.send('hello')
})
app.get('/about', function(req, res) {
    res.send('about')
})
app.listen(8080)