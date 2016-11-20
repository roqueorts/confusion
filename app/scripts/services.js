'use strict';

angular.module('confusionApp')
  .constant("baseURL", "http://localhost:3000/")
  .service('menuFactory', ['$resource', 'baseURL', function($resource, baseURL) {
    var menufac = {};
    // this.getDishes = function() {
    //   return $http.get(baseURL + "dishes");
    // };
    this.getDishes = function() {
      return $resource(baseURL + "dishes/:id", null, {
        'update': {
          method: 'PUT'
        }
      });
    };
    // this.getDish = function(index) {
    //   return $http.get(baseURL + "dishes/" + index);
    //
    // };
    // menufac.getDishes = function() {
    //   return dishes;
    // };
    // menufac.getDish = function(index) {
    //   return dishes[index];
    // };
    // return menufac;

  }]);
