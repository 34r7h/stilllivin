'use strict';

/**
* @ngdoc directive
* @name stilllivin.directive:livin
* @description
* # livin
*/
angular.module('stilllivin')
.directive('livin', function (Api)
{
    return {
        templateUrl: 'scripts/livin/livin-d.html',
        
        restrict: 'EA',
        scope: {

        },
        link: function (scope, el, attrs)
        {

        },
        controller: function ($scope)
        {
            var vm = this;
            vm.api = Api;
            console.log(vm.api);
        },
        controllerAs: 'sl'
    };
});