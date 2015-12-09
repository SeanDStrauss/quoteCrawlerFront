'use strict';

/**
 * @ngdoc function
 * @name quoteCrawlerFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quoteCrawlerFrontApp
 */
angular.module('quoteCrawlerFrontApp')
  .controller('MainCtrl', function ($scope, newsFactory, Restangular) {

  	$scope.searchTerm = function() {
  		var newsStuff = {};
  		newsStuff = newsFactory.searchByTerm($scope.search);



  	};

  	$scope.$watch(function(){return newsFactory.getNewsData();}, function(newVal, oldVal) {
		if (typeof newVal !== 'undefined') {
        $scope.newsInfo = newVal.data;

      }});

      Restangular.setBaseUrl("http://localhost:8080/article/");
      var restTest = Restangular.all("findbyterm")
      var stuff =  restTest.getList( {"searchTerm": "donald"}).then(function(article){
          $scope.article = article;
      });











    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
