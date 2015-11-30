'use strict';

/**
 * @ngdoc service
 * @name quoteCrawlerFrontApp.newsFactory
 * @description
 * # newsFactory
 * Factory in the quoteCrawlerFrontApp.
 */
angular.module('quoteCrawlerFrontApp')
  .factory('newsFactory', function($http) {
    var newsData = {};
    function searchByTerm(term) {
    $http({
      method: 'GET',
      url: 'http://localhost:8080/testing'
    }).then(function successCallback(response) {
      newsData = response;
      console.log(term);

     
      
    }, function errorCallback(response) {
      
    });
  }

    // Public API here
    return {
      getNewsData: function() {
        return newsData;
      },
      searchByTerm: searchByTerm
    };
});

    

