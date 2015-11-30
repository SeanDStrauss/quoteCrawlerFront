'use strict';

/**
 * @ngdoc service
 * @name quoteCrawlerFrontApp.newsFactory
 * @description
 * # newsFactory
 * Factory in the quoteCrawlerFrontApp.
 */
angular.module('quoteCrawlerFrontApp')
  .factory('newsFactory', function ($resource) {
    var data = $resource('http://localhost:8080/testing');
   

    return data;
  });

    

