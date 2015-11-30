'use strict';

/**
 * @ngdoc function
 * @name quoteCrawlerFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quoteCrawlerFrontApp
 */
angular.module('quoteCrawlerFrontApp')
  .controller('MainCtrl', function ($scope, newsFactory) {

  	$scope.searchTerm = function() {
  		var newsStuff = {};
  		newsStuff = newsFactory.searchByTerm($scope.search);
  		
  		
  		
  	}

  	$scope.$watch(function(){return newsFactory.getNewsData();}, function(newVal, oldVal) {
		if (typeof newVal !== 'undefined') {
        $scope.newsInfo = newVal.data;
        console.log($scope.newsInfo);
        
        //console.log(movieArray);
        

       
       
       }})
  	

  	

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
