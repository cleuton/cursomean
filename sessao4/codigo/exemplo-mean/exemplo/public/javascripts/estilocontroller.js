angular.module('exemplo',[])
  .controller('estilocontroller', ['$scope','$http',
    function($scope, $http) {

      $http.get('/estilos').success(function(lista) {
        $scope.estilos = lista;
      });
    }
]);
