const express = require('express')
const app = express()



app.get('/', function(req,res){
    res.send('Hola Mundo!!!')
})

app.post('/imagen',function(req,res) {
    res.send('Hola mundos desde POST!!')    
})

app.listen(3000)