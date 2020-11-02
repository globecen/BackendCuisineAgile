var express= require('express');
var bodyParser= require('body-parser')
var models= require('mariadb');
var apiRouter = require('./apiRouter').router;
// Instatiation server
var server = express();

//Body Parser configuration
server.use(bodyParser.urlencoded({ extended: true}));
server.use(bodyParser.json());

//Configuration Route
server.get('/', function (req, res){
    res.setHeader('Content-type','text/html')
    res.status(200).send('Salut');

});
server.use('/api/', apiRouter);
//Lancement server
server.listen(8080, function(){
    console.log('Server en ecoute');
    
});
