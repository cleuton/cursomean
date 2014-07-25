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
        $scope.getArtistas();
      }
]);
