/*
Este exemplo é parte do Workshop de desenvolvimento com Stack MEAN, 
de Cleuton Sampaio. 

O trabalho Workshop de Desenvolvimento com Stack MEAN de Cleuton Sampaio de Melo Jr
está licenciado com uma Licença Creative Commons - Atribuição-CompartilhaIgual 4.0 
Internacional.

http://creativecommons.org/licenses/

Isso inclui: Textos, páginas, gráficos e código-fonte.
*/

// insere-estilo.js - script que altera um documento usando o mongoose

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
Estilo.findByIdAndUpdate({ "_id" : mongoose.Types.ObjectId("53c7d62f69019e2a12289818")},
	{$set : { nome : 'Partido Alto'}}, function(erro,estilo) {
	    if (erro) {
		console.log('erro: ' + erro);
	    }
	    else {
	 	console.log(estilo);
	    }
	});

