/*
Este exemplo é parte do Workshop de desenvolvimento com Stack MEAN, 
de Cleuton Sampaio. 

O trabalho Workshop de Desenvolvimento com Stack MEAN de Cleuton Sampaio de Melo Jr
está licenciado com uma Licença Creative Commons - Atribuição-CompartilhaIgual 4.0 
Internacional.

http://creativecommons.org/licenses/

Isso inclui: Textos, páginas, gráficos e código-fonte.
*/

// cria-update-artista.js - script que cria e atualiza coleções compostas com o mongoose


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
fulano = new Artista({
	nome : 'Fulano de Tal',
  musicas : [
    { titulo : 'Ô vida de cão'},
    { titulo : 'Todo castigo é pouco'}
  ]
	});
fulano.save(function(erro,artista) {
	Estilo.findOne({ nome : {$regex : 'sertanejo', $options : 'i'}},
		function(erro,sertanejo) {
		   if(!erro) {
			Artista.update( {'_id' : artista._id},
				{$set : {estilo_id : sertanejo}}, 
				function(erro) {
				   if(erro) {
					console.log('Erro ' + erro);
				   }
				   else {
					console.log('Ok');
				   }
				});
		   }
		   else {
			console.log('Erro no find do Estilo');
		   }
		});

});



