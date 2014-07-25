var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Estilos de artistas' });
});

/* Lista de artistas */
router.get('/estilos', function(req, res) {
  Estilo.find({})
  .exec(function(erro,estilos) {
    if(!erro) {
      res.header('Content-type', 'application/json; charset=utf-8');
      res.json(200,estilos);
    }
    else {
      throw new Error('Erro ao acessar banco: ' + erro);
    }
  });
});

module.exports = router;
