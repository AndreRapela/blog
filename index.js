const express = require('express');
const app = express();
const {engine} = require('express-handlebars')
const bodyParser = require('body-parser')


//Config
    //Template Engine
    app.engine('handlebars', engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

    //Body Parse
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
    //ROTAS

    app.get('/cad',function(req,res){
        res.render('formulario')
    })

    app.post('/add',function (req,res){
        res.send("Texto:" + req.body.titulo + "Conteudo: " + req.body.conteudo)
    })

    app.listen('8080', function(){
        console.log("o servidor está rodando na url:http://localhost:8080 ")
    })