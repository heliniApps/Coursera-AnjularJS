(function (){
'use strict';

/* Minification can remove service arguments such as $scope.
  * Therefore, Dependency Injection should be Minification proof.
  * It can be removed using below mechanisms.

  * Passing argument names as string literals into an Array to the Controller.
  * (recommended for readability) Using "$inject" service to
    inject argument variables into the function used in Controller.
  */
    angular.module('DIApp', [])
    .controller('DIController', DICtrlFunc /*['$scope', '$filter', DICtrlFunc]*/);

    DICtrlFunc.$inject = ['$scope','$filter'];  // Declaration of inject service.

    function DICtrlFunc($scope, $filter){
      $scope.name = "Hel";

      $scope.upper = function (){
        var upCase = $filter('uppercase');  // Adding a filter - for uppercasing font.
        $scope.name = upCase($scope.name);
      };

    }


})();


// !function(){"use strict";function e(e,n){e.name="Hel",e.upper=function(){var r=n("uppercase");e.name=r(e.name)}}angular.module("DIApp",[]).controller("DIController",e),e.$inject=["$scope","$filter"]}();
