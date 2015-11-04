'use strict';

/**
* @ngdoc directive
* @name stilllivin.directive:auth
* @description
* # auth
*/
angular.module('stilllivin')
.directive('auth', function ()
{
    return {
        templateUrl: 'scripts/auth/auth-d.html',
        restrict: 'EA'
    };
});