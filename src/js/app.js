var myApp = angular.module('myApp', ['infinite-scroll']);

myApp.service('AppService', function($http) {
  var data = []
  $http.get('../json/items.json')
    .then(function(response) {
        data = response.data;
    });
    return data
});

myApp.controller('AppController', function($scope, AppService) {
  $scope.items = data;
  console.info($scope.items.length);

  $scope.loadMore = function() {
    var last = $scope.items[$scope.items.length - 1];
    for(var i = 1; i <= 1; i++) {
      $scope.items.push(last + i);
    }
  };
});
