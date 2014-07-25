var express = require('express');
var router = express.Router();

/* Retorna a página inicial */
router.get('/', function(req, res) {
  res.render('index',{ title : 'Artistas' });
});

/* Retorna a  lista de nomes dos artistas */
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

/* Retorna a  lista de nomes dos estilos */
router.get('/estilos', function(req, res) {
	Estilo
	    .find({},'nome')
	    .exec(function(erro,estilos) {
		if (!erro) {
			if(estilos) {
          res.json(200,estilos);
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

/* Inclui um novo artista */
router.post('/artista', function(req, res) {
  var nome = req.body.nome; 
  var nomeEstilo = req.body.estilo;
  Estilo.findOne({nome : {$regex : nomeEstilo, $options: 'i'}},
    function(erro, estilo) {
      if(!erro) {
        if(estilo) {
          var artista = new Artista({nome : nome,
                                     estilo_id : estilo._id,
                                     musicas : []});
          artista.save(
            function(erro) {
              if(!erro) {
                res.json(200,{status : 'ok'});
              }
              else {
                throw new Error('Erro ao incluir Artista ' + erro);
              }
            }
          );
        }
        else {
          throw new Error('Estilo inexistente ' + nomeEstilo);
        }
      }
      else {
        throw new Error('Erro ao ler estilo ' + erro);
      }
    }
  );

});

module.exports = router;
