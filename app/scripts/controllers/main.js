'use strict';

angular.module('howToBeYoloApp')
  .controller('MainCtrl', function ($scope, $firebase) {
    var papa = new Firebase("https://howtobeyolo.firebaseio.com/");
  	$scope.asd = $firebase(papa); 
  });
