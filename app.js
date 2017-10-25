// IIFE - immediately invoked function expression
// Purpose:  no local variables bleed into Global Scope.
(function(){
'use strict';   // used to restrict accidentally creating global variables. (e.g: x="hi";)

    // one particular object in global scope ==> angular
    // 'myFirstApp'  -- name of our application
    // []  -- any dependencies
    // module function --  returns the module instance.
    angular.module('myFirstApp', [])

    .controller('myFirstController', function($scope){
      // 'myFirstController'   -- name of the controller to manage a part of the view.
      // function ()  -- implements the functionality for the controller.
      // These are then hooked to the HTML file.

        $scope.name = "Helini";  // "$" is reserved in AngularJS. $scope is a global variable/scope given.
        $scope.sayHello = function(){
          return "Hello there!!";
        };
    });


})();
