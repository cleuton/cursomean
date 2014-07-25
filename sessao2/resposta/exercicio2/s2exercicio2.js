/*
Este exemplo é parte do Workshop de desenvolvimento com Stack MEAN, 
de Cleuton Sampaio. 

O trabalho Workshop de Desenvolvimento com Stack MEAN de Cleuton Sampaio de Melo Jr
está licenciado com uma Licença Creative Commons - Atribuição-CompartilhaIgual 4.0 
Internacional.

http://creativecommons.org/licenses/

Isso inclui: Textos, páginas, gráficos e código-fonte.
*/

// s2exercicio2.js - Servidor basico que acessa um banco de dados e pesquisa um artista

http = require('http')
url   = require('url');

mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/banco', function(erro) {
    if(erro) {
	console.log('erro ao conectar com o banco: ' + erro);
    }
    else {
	console.log('Conexão com o banco OK');
    }
});

schemaEstilo = new mongoose.Schema(
	{ 
		nome : String
	}
);


Estilo = mongoose.model('Estilo',schemaEstilo, 'estilo');

schemaArtista = new mongoose.Schema(
	{
	    "nome" : String, 
	    "pais" : String, 
	    "musicas" : [ { "titulo" : String }], 
	    "estilo_id" : {type: mongoose.Schema.Types.ObjectId, ref: 'Estilo'}
	}
);
Artista = mongoose.model('Artista',schemaArtista, 'artista');

http.createServer(function(req,res) {
      var url_parts = url.parse(req.url, true);
      var query = url_parts.query;
      var artista = query.artista;
      console.log(artista); 
      Artista
	.find({nome : {$regex : artista, $options : "i"}})     
	.exec(function(erro,dado) {
			if(!erro) {
			   if(dado) {
				res.end(JSON.stringify(dado));
			   }
			   else {
				res.end(saida);
			   }
			}});

   }).listen(8080, function() {
      console.log('Aguardando conexoes na porta 8080');
   });
