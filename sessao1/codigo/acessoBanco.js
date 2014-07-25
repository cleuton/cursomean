/*
Este exemplo é parte do Workshop de desenvolvimento com Stack MEAN, 
de Cleuton Sampaio. 

O trabalho Workshop de Desenvolvimento com Stack MEAN de Cleuton Sampaio de Melo Jr
está licenciado com uma Licença Creative Commons - Atribuição-CompartilhaIgual 4.0 
Internacional.

http://creativecommons.org/licenses/

Isso inclui: Textos, páginas, gráficos e código-fonte.
*/

// acessoBanco.js - Servidor basico que acessa um banco de dados


function mensagem(request,response) {
   MongoClient.connect("mongodb://localhost:27017/meudb", function(err, db) {
   if(!err) {
      var usuario = db.collection('usuario');
      usuario.findOne({cpf : 12345}, 
         function(err, item) {
            if(!err) {
               response.end('OK: ' + JSON.stringify(item));
            }
         });
   }
   else {
      response.end('Erro ao conectar ao banco');
   }
   });
}

var http = require('http');
var MongoClient = require('mongodb').MongoClient;
server = http.createServer(mensagem);
server.listen(8080, function() {
     console.log('Aguardando conexoes na porta 8080');
});



 
