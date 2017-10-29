(function(){
'use strict';

  angular.module('ExpressionApp', [])
  .controller('ExpController', ExpController);

  ExpController.$inject = ['$scope'];

  function ExpController($scope){
    $scope.name = "Helini";

    $scope.sayMessage = function (){
      return "I like jogging and swimming!!";
    };

// Image flipping using expressions code.
    $scope.stateOfBeing = "pooh-hungry";

    $scope.feedPooh = function (){
      $scope.stateOfBeing = "pooh-happy";
    };
  }

})();
