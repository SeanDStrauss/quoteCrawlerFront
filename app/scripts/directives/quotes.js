'use strict';

/**
 * @ngdoc directive
 * @name quoteCrawlerFrontApp.directive:quotes
 * @description
 * # quotes
 */
angular.module('quoteCrawlerFrontApp')
  .directive('quotes', function () {
    return {
      templateUrl: "scripts/directives/quotes.html",
      restrict: 'E',

      link: function postLink(scope, element, attrs) {
      

      }
    };
  });
console.log("testings");
