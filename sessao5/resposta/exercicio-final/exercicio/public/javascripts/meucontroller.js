angular.module('exercicio',[])
  .controller('meucontroller', ['$scope','$http',
    function($scope, $http) {
        $scope.getArtistas = function() {
            $http.get('/artistas').success(function(lista) {
              $scope.artistas = lista;
            });
        };
        $scope.getArtista = function(nome) {
            $http.get('/artista/' + nome).success(function(dados) {
              $scope.artista = dados;
            });
        };
        $scope.habilitarNovoArtista = function() {
          $scope.getEstilos();
          $scope.mostrarIA = true;
        };  
        $scope.incluirArtista = function() {
          if($scope.txtNomeArt &&
              $scope.txtNomeArt.length >0 &&
              $scope.selEstilo &&
              $scope.selEstilo.length >0) {
            $http.post('/artista',
              { nome : $scope.txtNomeArt, estilo: $scope.selEstilo })
            .success(function() {
                  $scope.mostrarIA = false;
                  $scope.txtNomeArt = "";
                  $scope.selEstilo = "";
                  $scope.getArtistas();
                })
            -error(function(erro) {
                  $scope.erro = 'Erro ao incluir artista ' + 
                                  erro;
              });
          }

        };
        $scope.getEstilos = function() {
            $http.get('/estilos')
            .success(function(lista) {
              $scope.estilos = lista;
            })
            .error(function(erro) {
              $scope.erro = 'Erro ao recuperar estilos ' + erro;
            });
        };
        $scope.getArtistas();
      }
]);
