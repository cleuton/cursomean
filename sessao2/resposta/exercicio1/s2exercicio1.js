/*
Este exemplo é parte do Workshop de desenvolvimento com Stack MEAN, 
de Cleuton Sampaio. 

O trabalho Workshop de Desenvolvimento com Stack MEAN de Cleuton Sampaio de Melo Jr
está licenciado com uma Licença Creative Commons - Atribuição-CompartilhaIgual 4.0 
Internacional.

http://creativecommons.org/licenses/

Isso inclui: Textos, páginas, gráficos e código-fonte.
*/

// s2exercicio1.js - Servidor basico que acessa um banco de dados e pesquisa um artista

http = require('http')
url   = require('url');
fs   = require('fs');
MongoClient = require('mongodb').MongoClient;
http.createServer(function(req,res) {
      var url_parts = url.parse(req.url, true);
      var query = url_parts.query;
      var artista = query.artista;
      console.log(artista);      
      MongoClient.connect("mongodb://localhost:27017/banco", function(err, db) {
         if(!err) {
            var colArtista = db.collection('artista');
	    var saida = ' ';
            colArtista.find({nome : {
                              $regex : artista, $options : "i"}
                  }).each(function(erro,dado) {
			if(!erro) {
			   if(dado) {
				saida += JSON.stringify(dado);
console.log('Musica 1' + dado.musicas[0].titulo);
			   }
			   else {
				res.end(saida);
			   }
			}
			});
         }
         else {
            res.end('Erro ao conectar ao banco');
         }
         });           
      
   }).listen(8080, function() {
      console.log('Aguardando conexoes na porta 8080');
   });
