var express = require('express');
var router = express.Router();

/* Retorna a página inicial com a lista dos artistas */
router.get('/', function(req, res) {
	Artista
	    .find({})
	    .populate('estilo_id')
	    .exec(function(erro,Artistas) {
		if (!erro) {
			if(Artistas) {
          res.render('index', { title: 'Catalogo de artistas', 
              lista : Artistas });
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
