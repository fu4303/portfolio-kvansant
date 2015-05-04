portfolio = angular.module('Portfolio', ['ui.router']);

brunch.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider.state('home', {
    url: '/',
    controller: 'HomeCtrl',
    templateUrl: '/templates/home.html'
  });

  $stateProvider.state('projects', {
    url: '/projects',
    controller: 'ProjectsCtrl',
    templateUrl: '/templates/projects.html'
  });
 
}]);


portfolio.controller('HomeCtrl', ['$scope',  function($scope) {
  

}]);


portfolio.controller('PortfolioCtrl', ['$scope',  function($scope) {
  

}]);

