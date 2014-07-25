var express = require('express');
var router = express.Router();

/* Retorna a página inicial */
router.get('/', function(req, res) {
  res.render('index',{ title : 'Artistas' });
});

/* Retorna a página inicial com a lista de nomes dos artistas */
router.get('/artistas', function(req, res) {
	Artista
	    .find({},'nome')
	    .exec(function(erro,Artistas) {
		if (!erro) {
			if(Artistas) {
          res.json(200,Artistas);
			}
			else {
			   throw new Error('Nao encontrado');
			}
		}
		else {
		    throw new Error('Erro ao acessar o banco: ' + erro);
		}
	}); 
});

/* Retorna um artista como um objeto JSON */
router.get('/artista/:nomeartista', function(req, res) {
	Artista
	    .findOne({ nome : {$regex : req.params.nomeartista, 
                  $options : 'i'}})
	    .populate('estilo_id')
	    .exec(function(erro, artista) {
		if (!erro) {
			if(artista) {
          res.json(200,artista);
			}
			else {
			   throw new Error('Nao encontrado');
			}
		}
		else {
		    throw new Error('Erro ao acessar o banco: ' + erro);
		}
	}); 

});

module.exports = router;
