'use strict';

/**
 * @ngdoc service
 * @name quoteCrawlerFrontApp.newsFactory
 * @description
 * # newsFactory
 * Factory in the quoteCrawlerFrontApp.
 */
//Search for newsdata and pass it to the MainController
angular.module('quoteCrawlerFrontApp')
  .factory('newsFactory', function($http) {
    var newsData = {};
    function searchByTerm(term) {
    $http({
      method: 'GET',
      url: 'http://localhost:8080/article/findbyterm?searchTerm=' + term
    }).then(function successCallback(response) {
      newsData = response;
      
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
