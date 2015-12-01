'use strict';

/**
 * @ngdoc filter
 * @name quoteCrawlerFrontApp.filter:highlighter
 * @function
 * @description
 * # highlighter
 * Filter in the quoteCrawlerFrontApp.
 */
angular.module('quoteCrawlerFrontApp')
  .filter('highlighter', function () {

    return function(textBody) {
      var regex = /"([^"\\]|\\.)*"/gi;
     if(regex) {
       var pattern = regex;
       return textBody.replace(pattern, '<span class="highlighter">$&</span>');
       console.log("$&");
     }
     else {
       return textBody;
     }
   };
  });
