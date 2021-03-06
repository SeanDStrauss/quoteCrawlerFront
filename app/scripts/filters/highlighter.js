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
  .filter('highlighter', function ($sce) {

    return function(textBody, search) {
        // /"([^"\\]|\\.)*"/gi;

      var regex = /"(.+?)"/gi;
     if(regex) {
       var pattern = regex;
       return $sce.trustAsHtml(textBody.replace(pattern, '<span class="highlighter">$&</span>'));

     }
     else {
       return textBody;
     }
   };
  });
//<div id="text" ng-model= "textBody">{{key.text | highlighter}}</div>
