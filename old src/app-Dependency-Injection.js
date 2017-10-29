(function (){
'use strict';

    angular.module('DIApp', [])
    .controller('DIController', DICtrlFunc);

    /* $scope, $filter and other attributes called on them
      are services. */
    function DICtrlFunc($scope, $filter, $injector){
      $scope.name = "Hel";

      $scope.upper = function (){
        var upCase = $filter('uppercase');  // Adding a filter - for uppercasing font.
        $scope.name = upCase($scope.name);
      };

      /* AngularJS uses a service called "$injector"
        to parse the parameters given to a controller
        and inject them in the view. */

      // This will print-out an Array of function arguments.
      console.log($injector.annotate(DICtrlFunc));
    }

    // test function
    function annotateMe (name, age, blah){
      return "hello!!";
    }


})();
