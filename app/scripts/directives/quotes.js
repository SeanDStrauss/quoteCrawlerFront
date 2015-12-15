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

    };
})
.directive('searchDirective', function() {
    return {
        restrict: 'AE',
        templateUrl: "scripts/directives/searchDirectives.html"
    };
})
.directive('register', function() {
    return{
        restrict: 'E',
        templateUrl: 'app/views/partials/register.html'
    };
})
