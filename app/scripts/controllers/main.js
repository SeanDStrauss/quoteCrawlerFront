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
  	$scope.news = newsFactory.get();

  	console.log($scope.news);

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
