(function (){
'use strict';

  angular.module('nameCalculatorApp', [])
  .controller('nameController', function($scope){

    $scope.name = "";
    $scope.totalValue = 0;

    // only displays the numeric value.
    $scope.displayTotal = function(){
      var totalOfName = calculateNameChars($scope.name);
      $scope.totalValue = totalOfName;
    }

    // just calculates the numeric value of a string.
    // Example of passing a "string" parameter.
    function calculateNameChars(string){
      var numericVal = 0;

      for(var i=0; i < string.length; i++){
        numericVal += string.charCodeAt(i);
      }
      return numericVal;
    }

  });

})();
