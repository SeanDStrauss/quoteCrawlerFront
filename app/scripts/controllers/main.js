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
 //  	$scope.$watch(function(){return newsFactory.getNewsData();}, function(newVal, oldVal) {
	// 	if (typeof newVal !== 'undefined') {
    //     $scope.newsInfo = newVal.data;
    //
    //   }});
      $scope.restSearch = function () {
          Restangular.setBaseUrl("http://localhost:60305/article/");
          var restTest = Restangular.all("findbyterm")
          var stuff =  restTest.getList( {"searchTerm": $scope.search}).then(function(article){
              $scope.article = article;

          });
      }

  });
