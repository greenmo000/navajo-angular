/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('navajoAngularApp');

app.directive('cmMinlength', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
                
      ctrl.$validators.minlength = function(modelValue, viewValue) {
          
        if (ctrl.$isEmpty(modelValue)) {
          // consider empty models to be valid
          return true;
        }

        if (modelValue.length >= attrs.cmMinlength) {
          // it is valid
          return true;
        }

        // it is invalid
        return false;
      };
    }
  };
});