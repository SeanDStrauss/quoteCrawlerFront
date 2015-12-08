'use strict';

/**
 * @ngdoc overview
 * @name quoteCrawlerFrontApp
 * @description
 * # quoteCrawlerFrontApp
 *
 * Main module of the application.
 */
angular
  .module('quoteCrawlerFrontApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
